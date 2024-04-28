import "./sidebar.scss";
import MenuItems from "./MenuItems";
import Toggle from "./Toggle";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <MenuItems />
      </motion.div>
      <Toggle setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Sidebar;
