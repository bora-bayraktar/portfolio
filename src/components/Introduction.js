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
            </div>
        );
    }
}

export default Introduction;
