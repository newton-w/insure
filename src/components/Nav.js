import React, { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import { motion } from "framer-motion";

const Nav = () => {
  const [humbergur, setHumbergur] = useState("");
  const [menu, setMenu] = useState("");

  const HandleMenu = () => {
    setHumbergur((prev) => (prev === "" ? "active" : ""));
    setMenu((prev) => (prev === "" ? "active" : ""));
  };

  useEffect(() => {
    if (humbergur === "active") {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "scroll";
    }
  });

  return (
    <nav>
      <motion.div
        className="logo"
        animate={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{ duration: 1, type: "spring", stiffness: 300 }}
      >
        <img src={Logo} alt="" />
      </motion.div>
      <div className={`menu ${menu}`}>
        <a href="/">HOW WE WORK</a>
        <a href="/">BLOG</a>
        <a href="/">ACCOUNT</a>
        <a href="/">VIEW PLANS</a>
      </div>
      <motion.div
        className={`menuToggle ${humbergur}`}
        onClick={HandleMenu}
        animate={{ x: 0 }}
        initial={{ x: 100 }}
        transition={{ duration: 1, type: "spring", stiffness: 300 }}
      ></motion.div>
    </nav>
  );
};

export default Nav;
