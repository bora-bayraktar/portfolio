import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Frame from "./components/Frame";

class App extends Component {
    render() {
        return (
            <div>
                <Frame />
                <Header />
                <About />
            </div>
        );
    }
}

export default App;
