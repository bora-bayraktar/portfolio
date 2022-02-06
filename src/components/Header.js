import React, { Component } from "react";
import Hello from "./Hello";
import Icons from "./Icons";
import FavButton from "./FavButton";

class Header extends Component {
    render() {
        return (
            <div className="header">
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
