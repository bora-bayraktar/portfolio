import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="contact-info">
                        <h4>Location</h4>
                        <p>Biçer Sk. Zekeriyaköy Mah. Sarıyer, İstanbul</p>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="contact-info">
                        <h4>Email</h4>
                        <a href="mailto:kemalborabayraktar@gmail.com">
                            <p>kemalborabayraktar@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
