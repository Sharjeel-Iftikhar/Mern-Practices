import React from "react";
import twitter from "../images/Twitter Icon.png";
import github from "../images/GitHub Icon.png";
import facebook from "../images/Facebook Icon.png";
import inst from "../images/Instagram Icon.png";
const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-items">
            <img src={twitter} alt="twitter ICon" className="footer-image"></img>
            <img src={github} alt="github ICon" className="footer-image"></img>
            <img src={facebook} alt="facebook ICon" className="footer-image"></img>
            <img src={inst} alt="Istagram ICon" className="footer-image"></img>
        </div>
        </div>
    );
}
export default Footer;