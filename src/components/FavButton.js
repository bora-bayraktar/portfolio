import React, { Component } from "react";

class FavButton extends Component {
    render() {
        return (
            <div className={`fav-button ${this.props.name}`}>
                <ul>
                    <li>
                        <a href={this.props.goHere} target={this.props.target}>
                            <span>{this.props.content}</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FavButton;
