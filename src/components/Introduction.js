import React, { Component } from "react";
import FavButton from "./FavButton";

class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <h3>
                    Let{" "}
                    <span
                        id="handwritten-me"
                        style={{ color: "rgb(237, 100, 89)" }}
                    >
                        me
                    </span>{" "}
                    introduce myself.
                </h3>
                <p>
                    I'm Bora. I study Computer Science and Economics at Koç
                    University. Besides my studies, I spare time for my social
                    life. I try to improve my programming skills and knowledge
                    by researching and learning in my free time.
                </p>
                <FavButton
                    name="display-resume"
                    content="Display Resume"
                    goHere="../assets/resume.pdf" // TODO: Make the PDF openable.
                    target="_blank"
                />
                <div className="info-container">
                    <div className="info">
                        <h5>FULLNAME:</h5>
                        <p>Kemal Bora Bayraktar</p>
                    </div>
                    <div className="info">
                        <h5>LOCATION:</h5>
                        <p>Istanbul/Turkey</p>
                    </div>
                    <div className="info">
                        <h5>GITHUB:</h5>
                        <a href="https://github.com/bora-bayraktar">
                            <p>github.com/bora-bayraktar</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;
