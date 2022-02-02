import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Icons extends Component {
    render() {
        return (
            <div className="icons">
                <a href="https://github.com/bora-bayraktar">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/kemal-bora-b-586b3812a/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:kemalborabayraktar@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    id="instagram-icon"
                    href="https://www.instagram.com/bora_bayraktar/"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        );
    }
}

export default Icons;
