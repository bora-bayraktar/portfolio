import React, { Component } from "react";
import Hello from "./Hello";
import Frame from "./Frame";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Frame />
                <Hello />
            </div>
        );
    }
}

export default Header;
