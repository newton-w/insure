import React from "react";
import "../App.css";
import snappy from "../images/icon-snappy-process.svg";
import affordable from "../images/icon-affordable-prices.svg";
import people from "../images/icon-people-first.svg";
import desktopImage from "../images/image-intro-desktop.jpg";
import mobileImage from "../images/image-intro-mobile.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="showcase-container">
        <div className="showcase">
          <motion.div
            className="showcase-image"
            animate={{ y: 0 }}
            initial={{ y: -1000 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <picture>
              <source media="(min-width:600px)" srcSet={desktopImage} />
              <img src={mobileImage} alt="" />
            </picture>
          </motion.div>
          <motion.div
            className="showcase-text"
            animate={{ x: 0 }}
            initial={{ x: -500 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <hr />
            <h1>Humanizing your Insurance.</h1>
            <p>
              Get your life insuarance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a href="/">View Plans</a>
          </motion.div>
        </div>
      </div>
      <div className="services">
        <hr />
        <motion.h1
        initial = {{x :-100}}
        whileInView = {{x : 0}}
        viewport = {{once : true}}
        >
          We're different</motion.h1>

        <div className="cards-container">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            viewport ={{once : true}}
          >
            <img src={snappy} alt="" />
            <h2>Snappy Process</h2>
            <p>
              Our application process can be completed in minutes not hours.
              Dont get stuck by filling tedious forms
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ type: "spring", stiffness: 50}}
            viewport ={{once : true}}
            
          >
            <img src={affordable} alt="" />
            <h2>Affordable Prices</h2>
            <p>
              We don't want you worrying about high monthly costs, our prices
              may be low, but we still offer the best coverage possible
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ type: "spring", stiffness: 30 }}
            viewport ={{once : true}}
          >
            <img src={people} alt="" />
            <h2>People First</h2>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div className="findmore"
        initial = {{scale : 0.5, opacity : 0.5}}
        whileInView = {{scale : 1, opacity: 1}}
        transition = {{duration : 2 , type : "spring", stiffness : 100}}
        viewport = {{once : true}}
      >
        <div className="text">
          <h1>Find out more about how we work</h1>
        </div>
        <div className="btn">
          <a href="/">How we work</a>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
