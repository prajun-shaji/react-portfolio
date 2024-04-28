import { GitHub, Instagram, Telegram } from "@mui/icons-material";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SIDE MENU */}
      <Sidebar />
      {/* WRAPPER */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PRAJUN SHAJI
        </motion.span>
        <div className="socials">
          <a href="https://github.com/prajun-shaji">
            <Instagram />
          </a>
          <a href="https://www.instagram.com/prajunshaji/">
            <GitHub />
          </a>
          <a href="https://t.me/Prajun">
            <Telegram />
          </a>
        </div>
      </div>
    </div>
  );
};

const itemIds = [0, 1, 2, 3, 4];

export default Navbar;
