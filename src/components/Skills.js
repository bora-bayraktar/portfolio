import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="programming">
                    <h3>Programming</h3>
                    <p>Java</p>
                    <p>Pyhton</p>
                    <p>C, C++</p>
                    <p>JavaScript, HTML, CSS</p>
                </div>
                <div className="tools">
                    <h3>Tools</h3>
                    <p>React, Bootstrap</p>
                    <p>Git</p>
                    <p>Microsoft Office</p>
                </div>
                <div className="languages">
                    <h3>Languages</h3>
                    <p>English</p>
                    <p>German</p>
                    <p>Turkish</p>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <p>Voleyball, Football, Basketball</p>
                    <p>Computer Science</p>
                </div>
            </div>
        );
    }
}

export default Skills;
