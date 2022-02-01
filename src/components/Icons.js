import React, { Component } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";

class Icons extends Component {
    render() {
        return (
            <div className="icons">
                <a href="https://github.com/bora-bayraktar">
                    <img id="github-icon"
                        width="28vmin"
                        height="28vmin"
                        src={github}
                        style={{ marginRight: "5vw" }}
                    ></img>
                </a>
                <a href="https://www.linkedin.com/in/kemal-bora-b-586b3812a/">
                    <img id="linkedin-icon"
                        width="30vmin"
                        height="30vmin"
                        src={linkedin}
                        style={{ marginRight: "5vw" }}
                    ></img>
                </a>
                <a href="mailto:kemalborabayraktar@gmail.com">
                    <img id="mail-icon"
                        width="31vw"
                        height="31vw"
                        src={mail}
                        style={{ marginRight: "5vw" }}
                    ></img>
                </a>
                <a id="instagram-icon" href="https://www.instagram.com/bora_bayraktar/">
                    <img width="32vmin" height="32vmin" src={instagram}></img>
                </a>
            </div>
        );
    }
}

export default Icons;
