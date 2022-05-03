import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer-container">
            <div className="sec-container">
                <p className="footer-text">
                    all &copy;copyright reserved by samsuzzaman - {year}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
