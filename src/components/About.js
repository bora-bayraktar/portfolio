import React, { Component } from "react";
import Introduction from "./Introduction";
import AboutHeader from "./AboutHeader";
import Skills from "./Skills";
import FavButton from "./FavButton";

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <AboutHeader />
                <Introduction />
                <FavButton
                    name="display-resume"
                    content="Display Resume"
                    goHere="../assets/resume.pdf" // TODO: Make the PDF openable.
                    target="_blank"
                />
                <img src={require("../assets/me.png")} />
                <Skills />
            </div>
        );
    }
}

export default About;
