import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  useEffect(() => {
    if (canvasDiv.current) {
      const isTouchViewport = window.matchMedia("(pointer: coarse)").matches;
      let isDisposed = false;
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isTouchViewport ? 0.9 : 1)
      );
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      let currentCharacter: THREE.Object3D | null = null;
      let animationFrame = 0;
      let lastFrameTime = 0;
      let pageVisible = !document.hidden;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter().then((gltf) => {
        if (gltf && !isDisposed) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          currentCharacter = gltf.scene;
          scene.add(currentCharacter);
          headBone = currentCharacter.getObjectByName("spine006") || null;
          screenLight = currentCharacter.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            if (isDisposed) {
              return;
            }
            setTimeout(() => {
              if (isDisposed) {
                return;
              }
              light.turnOnLights();
              animations.startIntro();
            }, 2500);
          });
        }
      });

      let mouse = { x: 0, y: 0 };
      let interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };

      const onTouchMove = (event: TouchEvent) => {
        handleTouchMove(event, (x, y) => (mouse = { x, y }));
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      const onResize = () => {
        if (currentCharacter) {
          handleResize(renderer, camera, canvasDiv, currentCharacter);
        }
      };

      const onVisibilityChange = () => {
        pageVisible = !document.hidden;
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("visibilitychange", onVisibilityChange);
      window.addEventListener("resize", onResize);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchmove", onTouchMove, { passive: true });
        landingDiv.addEventListener("touchend", onTouchEnd);
      }

      const animate = (time = 0) => {
        animationFrame = requestAnimationFrame(animate);
        if (!pageVisible) {
          return;
        }

        if (isTouchViewport && time - lastFrameTime < 1000 / 30) {
          return;
        }
        lastFrameTime = time;

        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animationFrame);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          landingDiv.removeEventListener("touchmove", onTouchMove);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
