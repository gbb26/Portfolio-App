import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import "./navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/gorakshnath-bhongal-256213230">
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/gokul_2680/">
            <Instagram />
          </a>
          <a href="https://github.com/gbb26">
            <GitHub />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
