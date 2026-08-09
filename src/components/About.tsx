import "./styles/About.css";
import { withBasePath } from "./utils/basePath";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m an AI/ML Software Engineer who builds intelligent products that feel effortless on the outside and rigorous underneath — from real-time computer vision systems to agentic workflows and production-grade AI experiences.
        </p>
        <ul className="about-highlights">
          <li>Designing full-stack AI systems that blend strong engineering with thoughtful product experience</li>
          <li>Building computer vision and multimodal pipelines for perception, automation, and analytics</li>
          <li>Creating deterministic evaluation environments and benchmark frameworks for frontier AI testing</li>
          <li>Shipping reliable tools with FastAPI, Next.js, automation platforms, and secure data workflows</li>
        </ul>
        <a href={withBasePath("cv.pdf")} download="Akshay-Dahiya-CV.pdf" className="about-resume-link">
          View / Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
