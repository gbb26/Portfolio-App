import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="footer">
      <hr className="line" />
      <ul className="wrapper">
        <li className="icon github">
          <a href="https://github.com/gbb26">
            <BsGithub size={30} color="" />
          </a>
        </li>
        <li className="icon linkedin">
          <a href="https://www.linkedin.com/in/gorakshnath-bhongal-256213230">
            <GrLinkedinOption size={30} color="" />
          </a>
        </li>
        <li className="icon instagram">
          <a href="https://www.instagram.com/gokul_2680/">
            <BsInstagram size={30} color="" />
          </a>
        </li>
        <li className="icon facebook">
          <a href="https://facebook.com/gorakshanath.bhongalpatil">
            <FiFacebook size={30} color="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
