import React from 'react';
import '../Shared_css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Support Section */}
                <div className="footer-section">
                    <h4>SUPPORT</h4>
                    <ul>
                        <li><a href="mailto:support@pmsapp.com">Email: support@pmsapp.com</a></li>
                        <li><a href="tel:+1234567890">Phone: +1 234 567 890</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>

                {/* About Section */}
                <div className="footer-section">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href="#">Company Overview</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Sustainability</a></li>
                    </ul>
                </div>

                {/* Policies Section */}
                <div className="footer-section">
                    <h4>POLICIES</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Security Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Community Section */}
                <div className="footer-section">
                    <h4>COMMUNITY</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Affiliates</a></li>
                    </ul>
                </div>
            </div>

            {/* Legal Disclaimer and Additional Links */}
            <div className="footer-disclaimer">
                <p>© 2024 Payment Management System. All rights reserved.</p>
                <p>By using this site, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
            </div>

            <div className="footer-extra">
                <p>Some documents may require <a href="https://get.adobe.com/reader/">Adobe Acrobat Reader</a>.</p>
            </div>
        </footer>
    );
}

export default Footer;
