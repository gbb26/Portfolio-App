import "./hero.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>GORAKSHNATH BHONGAL</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend & Backend Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button className="cta" variants={textVariants}>
                PROJECTS
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button className="cta" variants={textVariants}>
                CONTACT ME
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend And Backend Developer
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
