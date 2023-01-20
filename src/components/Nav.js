import React, { useState } from "react";
import Logo from '../images/logo.svg'


const Nav = () => {
  const [humbergur, setHumbergur] = useState("");
  const [menu, setMenu] = useState("");

  const HandleMenu = () => {
    setHumbergur((prev) => (prev === "" ? "active" : ""));
    setMenu((prev) => (prev === "" ? "active" : ""));
  };

  return (
    <nav>
      <div className="logo font-bold text-lg">
        <img src={Logo} alt="" />
      </div>
      <div className={`menu ${menu}`}>
        <a href="/">HOW WE WORK</a>
        <a href="/">BLOG</a>
        <a href="/">ACCOUNT</a>
        <a href="/">VIEW PLANS</a>
        {/* <div className="button">Call us</div> */}
      </div>
      <div className={`menuToggle ${humbergur}`} onClick={HandleMenu}></div>
    </nav>
  );
};

export default Nav;
