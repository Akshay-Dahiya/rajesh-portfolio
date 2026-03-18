import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const getDesktopView = () => window.innerWidth > 1024;
const getFinePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(getDesktopView);
  const [hasFinePointer, setHasFinePointer] = useState<boolean>(getFinePointer);

  useEffect(() => {
    let frame = 0;

    const resizeHandler = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsDesktopView(getDesktopView());
        setHasFinePointer(getFinePointer());
        setSplitText();
      });
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      {hasFinePointer && <Cursor />}
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
