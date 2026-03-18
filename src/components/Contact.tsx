import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:akshaydahiya2004@gmail.com" data-cursor="disable">
                akshaydahiya2004@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 7355874887</p>
            <h4>Location</h4>
            <p>Gurugram, Haryana</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Akshay-Dahiya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/akshay-dahiya-a40020185"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Akshay Dahiya</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
