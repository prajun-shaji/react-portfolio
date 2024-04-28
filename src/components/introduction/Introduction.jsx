import "./introduction.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 500,
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
  animateScroll: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Introduction = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PRAJUN SHAJI</motion.h2>
          <motion.h1 variants={textVariants}>
            WEB DEVELOPER AND UI DESIGNER
          </motion.h1>
          <motion.div className="btn" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="https://www.instagram.com/prajunshaji/">LATEST WORKS</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="https://github.com/prajun-shaji">CONTACT ME</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            variants={textVariants}
            animate="animateScroll"
          />
        </motion.div>
        <motion.div className="sliding-text">
          <marquee>FULL-STACK DEVELOPER WEB-DEVELOPER</marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
