import React from "react";
import emiallogo from "../images/Mail.png";
import linkdinlogo from "../images/linkedin.png";
const Content = () => {
    return(
        <div>
        <div className='text-info'>
                <h1 className='name'>Sharjeel Iftikhar</h1>
                <p className='job'>Frontend Developer</p>
            </div>
            <div className="btns">
                <button className="btn-email">
                    <img src={emiallogo} alt="email-logo" ></img>
                    <span>Email</span>
                    </button>
                <button className="btn-linkedin">
                    <img src={linkdinlogo} alt="linkedin-logo"></img>
                    <span>Linkedin</span>
                    </button>
            </div>
            </div>
    );  
}
export default Content;