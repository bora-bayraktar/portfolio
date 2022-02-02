import React, { Component } from "react";
import Introduction from "./Introduction";
import AboutHeader from "./AboutHeader";
import Skills from "./Skills";

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <AboutHeader />
                <Introduction />
                <img src={require("../assets/me.png")}/>
                <Skills />
            </div>
        );
    }
}

export default About;
