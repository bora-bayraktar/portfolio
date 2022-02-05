import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";

class More extends Component {
    render() {
        return (
            <div className="more">
                <div className="more-header">
                    <h1>M</h1>
                    <h1>
                        ORE<span style={{ color: "rgb(237, 100, 89)" }}>.</span>
                    </h1>
                </div>
                <h3>
                    More about{" "}
                    <span
                        id="handwritten-me"
                        style={{ color: "rgb(237, 100, 89)" }}
                    >
                        my
                    </span>{" "}carrier.
                </h3>
                <div className="experience-education">
                    <Experience />
                    <Education />
                </div>
            </div>
        );
    }
}

export default More;
