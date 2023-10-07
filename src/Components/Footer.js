import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sparsh Goel</h4>
      <h4>Copyright &copy; 2023 SG</h4>
      <div className="footerLinks">
        <a href="https://github.com/SPARSH1608" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sparsh-goel-3113831b7/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:sparshgoelk@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/sparshg16_/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
