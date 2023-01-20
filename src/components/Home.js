import React from 'react'
import '../App.css'
import snappy from '../images/icon-snappy-process.svg'
import affordable from '../images/icon-affordable-prices.svg'
import people from '../images/icon-people-first.svg'
import desktopImage from '../images/image-intro-desktop.jpg'
import mobileImage from '../images/image-intro-mobile.jpg'

function Home() {
  return (
    <>
      <div className="showcase-container">
        <div className="showcase">
          <div className="showcase-image">
            <picture>
              <source media="(min-width:600px)" srcSet={desktopImage} />
              <img src={mobileImage} />
            </picture>
          </div>
          <div className="showcase-text">
            <hr />
            <h1>Humanizing your Insurance.</h1>
            <p>Get your life insuarance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
            <a href="/">View Plans</a>
          </div>
        </div>
      </div>
      <div className="services">
        <hr />
        <h1>We're different</h1>

        <div className="cards-container">
          <div className="card">
            <img src={snappy} alt="" />
            <h2>Snappy Process</h2>
            <p>Our application process can be completed in minutes not hours. Dont get stuck by filling tedious forms</p>
          </div>
          <div className="card">
            <img src={affordable} alt="" />
            <h2>Affordable Prices</h2>
            <p>We don't want you worrying about high monthly costs, our prices may be low, but we still offer the best coverage possible</p>
          </div>
          <div className="card">
            <img src={people} alt="" />
            <h2>People First</h2>
            <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
          </div>
        </div>
      </div>
      <div className="findmore">
        <div className="text">
          <h1>Find out more about how we work</h1>
        </div>
        <div className="btn">
          <a href="/">How we work</a>
        </div>
      </div>
    </>
  )
}

export default Home