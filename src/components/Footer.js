import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import the CSS for Font Awesome icons

import '../components/Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2 className="logo">ReFlow Tech.</h2> {/* Adjust the logo title */}
            </div>
            <div className="footer-right">
                <a href="https://www.instagram.com/reflowtech/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> {/* Instagram icon */}
                </a>
                <a href="https://www.linkedin.com/company/reflowtechnologies/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
                </a>
            </div>
        </footer>
    );
}

export default Footer;
