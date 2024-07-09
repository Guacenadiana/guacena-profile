import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    const openGmailCompose = () => {
        window.open('mailto:guacenadian@gmail.com?subject=Subject%20Here&body=Message%20Here');
    };

    const makePhoneCall = () => {
        window.open('tel:+639305510229');
    };

    const openMap = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Mabinay%20Negros%20Oriental');
    };

    return (
        <animated.div style={fadeInStyles} className="contact-container">
            <h1>Contact Me</h1>
            <p className="contact-description">Feel free to reach out to me via any of the methods below:</p>
            
            <div className="contact-info">
                <animated.div className="contact-item" style={fadeInStyles} onClick={openGmailCompose}>
                    <FaEnvelope className="contact-icon" />
                    <p>guacenadian@gmail.com</p>
                </animated.div>
                <animated.div className="contact-item" style={fadeInStyles} onClick={makePhoneCall}>
                    <FaPhone className="contact-icon2" />
                    <p>(63) 930 551 0229</p>
                </animated.div>
                <animated.div className="contact-item" style={fadeInStyles} onClick={openMap}>
                    <FaMapMarkerAlt className="contact-icon3" />
                    <p>Mabinay Negros Oriental</p>
                </animated.div>
            </div>
        </animated.div>
    );
} 

export default Contact;
