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
                    <div className="info">
                        <h5>EMAIL:</h5>
                        <a href="mailto:kemalborabayraktar@gmail.com">
                            <p>kemalborabayraktar@gmail.com</p>
                        </a>
                    </div>
                </div>
                <FavButton
                    name="display-resume"
                    content="Display Resume"
                    goHere="https://user-images.githubusercontent.com/78881290/152663929-5355700c-0689-41cf-a678-8dcb223c100a.png" // TODO: Make the PDF openable.
                    target="_blank"
                />
            </div>
        );
    }
}

export default Introduction;
