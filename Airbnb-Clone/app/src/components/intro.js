import React from "react";
import gridimge from "../images/photo-grid.png";
const Intro = () => {
    return(
        <section className="hero">
        <img src={gridimge} alt="imagegrid" className="hero--image"></img>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Unique activities we can do together, led by a world of hosts.</p>
    </section>
    );
    
}
export default Intro;