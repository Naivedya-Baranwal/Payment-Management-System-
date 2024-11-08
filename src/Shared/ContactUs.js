
import React from 'react';
import '../Shared_css/ContactUs.css'; 

function ContactUs() {
    return (
        <div className="contact-us-container">
            <img className="contact-us-image" src="/contactus.jpg" alt="Support Header" />
            <h1 className="contact-us-header">Support</h1>
            <div className="contact-us-content">
                <div className="contact-us-box">
                    <h2>Technical Support</h2>
                    <p><strong>Track your integration in our ticketing system</strong></p>
                    <p>Open a ticket to report a bug or ask for integration help.</p>
                    <a href="/support-ticket">Support Ticket</a>
                </div>

                <div className="contact-us-box">
                    <h2>Frequently Asked Questions</h2>
                    <p><strong>Common questions and answers</strong></p>
                    <p>Search our FAQ database for quick guides and "How to" instructions.</p>
                </div>

                <div className="contact-us-box">
                    <h2>Live Chat</h2>
                    <p><strong>Support hours 9am - 6pm CET</strong></p>
                    <p>Raise technical and integration questions with our engineers on Skype chat. Add Skype "PayPipes" to your Skype contacts.</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
