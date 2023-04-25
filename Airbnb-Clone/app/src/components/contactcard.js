import React from "react";
import phoneimage from "../images/phone-icon.png";
import emailimage from "../images/mail-icon.png";
const Contactcard = (props) => {
   // console.log(props);
    return(
        
        <div className="contact--card">
            <img src={props.coverImg} alt="catimg"></img>
            <h3>{props.name}</h3>
            <div className="info--group">
                <img src={phoneimage} alt=""></img>
                <p>{props.phone}</p>
            </div>
            <div className="info--group">
                <img src={emailimage} alt=""></img>
                <p>{props.email}</p>
            </div>
        </div>
       
    );
}
export default Contactcard;