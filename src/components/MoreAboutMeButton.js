import React, { Component } from "react";

class MoreAboutMeButton extends Component {
    render() {
        return (
            <div className="more-about-button">
                <ul id="more-button-ul">
                    <li id="more-button-li">
                        <a href="#about"><span id="more-button-span">More About Me</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MoreAboutMeButton;
