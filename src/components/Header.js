import React, { Component } from "react";
import Hello from "./Hello";
import Frame from "./Frame";
import Icons from "./Icons";
import MoreAboutMeButton from "./MoreAboutMeButton";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Frame />
                <Hello />
                <Icons />
                <MoreAboutMeButton />
            </div>
        );
    }
}

export default Header;
