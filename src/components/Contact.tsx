import {
  MdArrowOutward,
  MdCall,
  MdCopyright,
  MdDownload,
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import { withBasePath } from "./utils/basePath";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-shell">
        <div className="contact-header">
          <span className="contact-kicker">Contact</span>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            If you&apos;re working on AI systems, computer vision, automation,
            or product ideas that need thoughtful engineering, I&apos;d love to
            hear about it.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-primary">
            <span className="contact-card-label">Start a conversation</span>
            <h3>
              Open to meaningful work across AI, vision, and automation.
            </h3>
            <div className="contact-actions">
              <a
                href="mailto:akshaydahiya2004@gmail.com"
                data-cursor="disable"
                className="contact-action"
              >
                Email Me <MdArrowOutward />
              </a>
              <a
                href="https://linkedin.com/in/akshay-dahiya-a40020185"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-action contact-action-secondary"
              >
                LinkedIn <MdArrowOutward />
              </a>
              <a
                href={withBasePath("cv.pdf")}
                download="Akshay-Dahiya-CV.pdf"
                data-cursor="disable"
                className="contact-action contact-action-secondary"
              >
                Download Resume <MdDownload />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-detail">
              <span>
                <MdEmail />
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:akshaydahiya2004@gmail.com" data-cursor="disable">
                  akshaydahiya2004@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <MdCall />
              </span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+917355874887" data-cursor="disable">
                  +91 73558 74887
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <MdLocationOn />
              </span>
              <div>
                <h4>Location</h4>
                <p>Gurugram, Haryana</p>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card-socials">
            <h4>Elsewhere</h4>
            <a
              href="https://github.com/Akshay-Dahiya"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/akshay-dahiya-a40020185"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            Designed and developed by <span>Akshay Dahiya</span>
          </p>
          <h5>
            <MdCopyright /> 2025
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
