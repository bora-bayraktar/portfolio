import React, { Component } from "react";

class Hello extends Component {
  render() {
    const colorStyle = {
      color: "rgb(237, 100, 89)",
    };

    return (
      <div className="hello">
        <p id="hello">
          HELLO<span style={colorStyle}>.</span>
        </p>
        <p id="iam">
          I'm Kemal Bora Bayraktar
          <span style={colorStyle}>.</span>
        </p>
      </div>
    );
  }
}

export default Hello;
