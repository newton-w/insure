import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


const Footer = () => {
    return (
        <div className="footer">
            <div className="socials-container">
                <img src={logo} alt="" />
                <div className="socials">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <hr />
            <div className="links-container">
                <div className="links">
                    <h4>OUR COMPANY</h4>
                    <a href="/">HOW WE WORK</a>
                    <a href="/">WHY INSURE</a>
                    <a href="/">VIEW PLANS</a>
                    <a href="/">REVIEWS</a>
                </div>
                <div className="links">
                    <h4>HELP ME</h4>
                    <a href="/">FAQ</a>
                    <a href="/">TERMS OF USE</a>
                    <a href="/">PRIVACY POLICY</a>
                    <a href="/">COOKIES</a>
                </div>
                <div className="links">
                    <h4>CONTACT</h4>
                    <a href="/">SALES</a>
                    <a href="/">SUPPORT</a>
                    <a href="/">LIVE CHART</a>
                </div>
                <div className="links">
                    <h4>OTHERS</h4>
                    <a href="/">CAREES</a>
                    <a href="/">PRESS</a>
                    <a href="/">LICENCES</a>
                </div>
            </div>
            <div className="credits">&nbsp;Design by&nbsp;<a href="/">FrontEnd Mentor</a>&nbsp;Coded by &nbsp;<a href="https://github.com/newton-w" target= "_blank">Newton_W</a></div>
        </div>
    )
}

export default Footer