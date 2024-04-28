import React, { useRef } from "react";
import "./portfolio.scss";
import projects from "./portfolioData.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Project = (projects) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={projects.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{projects.title}</h2>
            <p>{projects.desc}</p>
            <button>
              <a href={projects.link}>VIEW</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>MY PROJECTS</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          img={project.img}
          desc={project.desc}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;
