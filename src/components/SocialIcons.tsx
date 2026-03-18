import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { MdArrowOutward } from "react-icons/md";
import { withBasePath } from "./utils/basePath";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href="https://github.com/Akshay-Dahiya"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://linkedin.com/in/akshay-dahiya-a40020185"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={withBasePath("cv.pdf")}
        download="Akshay-Dahiya-CV.pdf"
        data-cursor="disable"
      >
        <span className="resume-button-label">Download CV</span>
        <span>
          <MdArrowOutward />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
