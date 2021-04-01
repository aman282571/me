import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "../cssfiles/contact.css";
function Contact() {
  return (
    <div className="contact">
      <div>
        <a href="https://github.com/aman282571" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-thakur-8b214a197/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/AmanTha42592602" target="_blank">
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100025145840801"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </div>
      <p>Built & designed with ❤️</p>
    </div>
  );
}

export default Contact;
