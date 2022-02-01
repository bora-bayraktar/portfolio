import React, { Component } from "react";
import Typical from "react-typical";

class Hello extends Component {
    render() {
        const colorStyle = {
            color: "rgb(237, 100, 89)",
        };

        return (
            <div className="hello">
                <p id="hello">
                    Hello<span style={colorStyle}>.</span>
                </p>
                <p id="iam">
                    I'm Kemal Bora Bayraktar
                    <span style={colorStyle}>.</span>
                </p>
                <p id="typer">
                    I'm{" "}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "Computer Science student.",
                            500,
                            "Economics student.",
                            500,
                            "CS and Economics Double Major student.",
                            500,
                        ]}
                    />
                </p>
            </div>
        );
    }
}

export default Hello;
