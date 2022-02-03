import React, { Component } from "react";
import Hello from "./Hello";
import Frame from "./Frame";
import Icons from "./Icons";
import FavButton from "./FavButton";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Frame />
                <Hello />
                <Icons />
                <FavButton
                    name="more-about"
                    content="More About Me"
                    goHere="#about"
                />
            </div>
        );
    }
}

export default Header;
