import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { withBasePath } from "./utils/basePath";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    const canSmooth =
      window.innerWidth > 1024 &&
      !window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(
      document.querySelectorAll(".header ul a")
    ) as HTMLAnchorElement[];

    const createdSmoother = canSmooth
      ? ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.05,
          speed: 1.05,
          effects: false,
          autoResize: true,
          ignoreMobileResize: true,
        })
      : null;

    smoother = createdSmoother;
    createdSmoother?.scrollTop(0);
    createdSmoother?.paused(true);

    const handleLinkClick = (e: Event) => {
      if (!createdSmoother) {
        return;
      }

      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.getAttribute("data-href");

      if (section) {
        createdSmoother.scrollTo(section, true, "top top");
      }
    };

    let resizeFrame = 0;
    const handleResize = () => {
      if (!createdSmoother) {
        return;
      }

      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        createdSmoother.refresh();
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(resizeFrame);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("resize", handleResize);
      createdSmoother?.kill();
      if (smoother === createdSmoother) {
        smoother = null;
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <a
          href={withBasePath("")}
          className="navbar-title"
          data-cursor="disable"
        >
          AD
        </a>
        <a
          href="mailto:akshaydahiya2004@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          akshaydahiya2004@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
