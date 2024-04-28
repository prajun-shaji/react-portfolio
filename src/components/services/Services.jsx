import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I help brands grow through smart development
          <br /> as an advanced web developer
        </p>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./coding.avif" />
          <h1>
            <motion.b whileHover={{ color: "#37b9f1" }}>Transforming </motion.b>
            your business
          </h1>
        </div>
        <div className="title">
          <h1>
            with game-changing
            <motion.b whileHover={{ color: "#37b9f1" }}> innovations</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#f5f5f5", color: "black" }}
        >
          <h2>Custom Website Dev</h2>
          <p>
            Crafting bespoke websites from scratch, ensuring each site is
            uniquely tailored to meet the specific requirements and objectives
            of clients. Utilizing cutting-edge web technologies and design
            principles to deliver visually appealing, user-friendly, and
            high-performance websites that leave a lasting impression on
            visitors.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#f5f5f5", color: "black" }}
        >
          <h2>Web Application Dev</h2>
          <p>
            Building dynamic and scalable web applications that empower
            businesses to streamline operations, enhance user engagement, and
            achieve their goals. Leveraging expertise in frontend and backend
            development to create intuitive interfaces and robust functionality,
            customized to the needs of each project.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#f5f5f5", color: "black" }}
        >
          <h2>E-commerce Solutions</h2>
          <p>
            Developing comprehensive e-commerce platforms that enable businesses
            to establish a strong online presence, and deliver exceptional
            shopping experiences to customers. Implementing secure payment
            gateways, inventory management systems, and intuitive user
            interfaces.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#f5f5f5", color: "black" }}
        >
          <h2>Website Maintenance</h2>
          <p>
            Offering reliable and proactive maintenance services to ensure
            websites remain secure, up-to-date, and fully functional at all
            times and with ongoing technical support, and performance
            optimization to enhance user experience, minimize downtime.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
