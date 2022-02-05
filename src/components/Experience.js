import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
    render() {
        return (
            <div className="info-class experience">
                <h4>Experience</h4>
                <div className="info-class-container">
                    <div className="info-kind">
                        <h6>Board Member</h6>
                        <p>2016 - 2017</p>
                    </div>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="vl"></div>
                    <div className="info-content">
                        <h6>Sporbi</h6>
                        <p>Sport content and sport news website.</p>
                    </div>
                </div>
                <h4>Volunteer Experience</h4>
                <div className="info-class-container">
                    <div className="info-kind">
                        <h6>Executive Committee Member</h6>
                        <p>2016 - 2019</p>
                    </div>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faHandsHelping} />
                    </div>
                    <div className="vl"></div>
                    <div className="info-content">
                        <h6>İstanbul Erkek Lisesi Sportfest Committee</h6>
                        <p>
                            Coordinated festivals with the sponsorship budget
                            obtained from the companies.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
