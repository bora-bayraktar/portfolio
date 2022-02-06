import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import More from "./components/More";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <More />
            </div>
        );
    }
}

export default App;
