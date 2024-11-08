import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Shared_css/AboutUs.css';

const words = ["modern", "affordable", "friendly-UI", "reliable"];

function AboutUs() {
    const [changingText, setChangingText] = useState("modern");
    const navigate = useNavigate();

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % words.length;
            setChangingText(words[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []); 

    const handleTryFreeClick = () => {
        navigate('/signup');
    };

    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-left">
                    <img src="/aboutusleft.jpeg" alt="About Us Left" />
                </div>
                <div className="about-us-center">
                    <h1>
                        Simply <span className="changing-text">{changingText}</span>
                        <br />
                        payment management system
                    </h1>
                    <p style={{ margin: '50px 0px 30px 0px' }}>
                        Aggregate and centralize your payments through seamless integration to enhance and streamline your business.
                    </p>
                    <button className="try-free-button" onClick={handleTryFreeClick}>Try free</button>
                </div>
                <div className="about-us-right">
                    <img src="/aboutusright.jpeg" alt="About Us Right" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
