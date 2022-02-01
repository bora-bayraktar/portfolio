import React, { Component } from "react";
import Hello from "./Hello";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Hello />
            </div>
        );
    }
}

export default Header;
