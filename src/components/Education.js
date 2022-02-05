import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

class Education extends Component {
    render() {
        return (
            <div className="info-class education">
                <h4>Education</h4>
                <div className="info-class-container">
                    <div className="info-content">
                        <h6>Koç University</h6>
                        <p>Computer Science and Economics Double Major</p>
                    </div>
                    <div className="vl"></div>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div className="info-kind">
                        <h6>Bachelor's Degree</h6>
                        <p>2020 - 2024</p>
                    </div>
                </div>
                <div className="info-class-container">
                    <div className="info-content">
                        <h6>İstanbul Erkek Lisesi</h6>
                    </div>
                    <div className="vl"></div>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div className="info-kind">
                        <h6>High School</h6>
                        <p>2015 - 2020</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
