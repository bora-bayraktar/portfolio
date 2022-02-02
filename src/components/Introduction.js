import React, { Component } from "react";

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
                    I'm Bora. I study Computer Science and Economics at
                    Koç University. Besides my studies, I spare time for my
                    social life. I try to improve my programming skills and
                    knowledge by researching and learning in my free time.
                </p>
            </div>
        );
    }
}

export default Introduction;
