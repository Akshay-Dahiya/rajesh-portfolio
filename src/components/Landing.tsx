import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const elements = document.querySelectorAll(".hacker-text");
    const cleanups: Array<() => void> = [];

    elements.forEach(element => {
      let interval: number | null = null;
      const target = element as HTMLElement;

      const handleMouseOver = () => {
        let iteration = 0;
        clearInterval(interval as number);

        interval = setInterval(() => {
          target.innerText = target.innerText
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return (target.dataset.value as string)[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= (target.dataset.value as string).length) {
            clearInterval(interval as number);
          }

          iteration += 1 / 3;
        }, 30);
      };

      target.addEventListener("mouseover", handleMouseOver);
      cleanups.push(() => {
        clearInterval(interval as number);
        target.removeEventListener("mouseover", handleMouseOver);
      });
    });

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              <span className="hacker-text" data-value="AKSHAY" style={{ display: "inline-block" }}>AKSHAY</span>
              <br />
              <span className="hacker-text" data-value="DAHIYA" style={{ display: "inline-block" }}>DAHIYA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI / ML</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Computer Vision</div>
              <div className="landing-h2-info-1">Automation</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
