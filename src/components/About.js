import React, { Component } from "react";
import Introduction from "./Introduction";
import AboutHeader from "./AboutHeader";

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <AboutHeader />
                <Introduction />
            </div>
        );
    }
}

export default About;
