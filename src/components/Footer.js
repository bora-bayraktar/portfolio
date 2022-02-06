import React, { Component } from "react";
import Contact from "./Contact";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-header">
                    <h1>CON</h1>
                    <h1>
                        TACT
                        <span style={{ color: "rgb(237, 100, 89)" }}>.</span>
                    </h1>
                </div>
                <h3>
                    Feel{" "}
                    <span
                        id="handwritten-me"
                        style={{
                            color: "rgb(237, 100, 89)",
                            fontSize: "3.5vmin",
                        }}
                    >
                        free
                    </span>{" "}
                    to contact me.
                </h3>
                <Contact />
            </div>
        );
    }
}

export default Footer;
