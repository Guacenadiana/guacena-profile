import React from 'react';
import './About.css';
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaUser } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="about-container">
            <div className="container-title">
                <h1>About Me</h1>
                <p className="subtitle">" Hi! I am a junior web developer passionate about creating user-friendly and innovative web experiences."</p>
            </div>
            <div className="about-content">
                <div className="left-side">
                    <div className="text-block">
                        <h2>Contact</h2>
                        <p>For assistance or inquiries, send me an email, and I'll be happy to assist.</p>
                    </div>
                    <div className="text-block">
                        <h2>Interested in featuring junior web developers at your event?</h2>
                        <p>I focus on software development and emerging technologies. I'm excited to contribute my experience to your event.</p>
                    </div>
                    <div className="text-block">
                        <h2>Want to hire me as a junior web developer?</h2>
                        <p> Schedule a free meeting with me to discuss your project needs.</p>
                    </div>
                    <div className="recommendation-container">
                        <h2>Recommendations</h2>
                        <div className="recommendation">
                            <div className="profile">
                                <FaUser className="profile-img" style={{ fontSize: '3rem', color: '#333', border: '2px solid #333', borderRadius: '50%', padding: '5px' }} />
                                <div className="profile-info">
                                    <h3>Leonard G.</h3>
                                    <p>Capstone Programmer</p>
                                </div>
                            </div>
                            <p className="comment">"Diana has demonstrated remarkable growth and dedication as a junior web developer. 
                                Her enthusiasm for learning and applying new technologies is inspiring.
                                 She consistently delivers well-crafted code and approaches challenges with a positive attitude."</p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <p> As a junior web developer, small achievements can be very exciting. Completing your first HTML and CSS project helps you understand web page structure and styling. Making a simple JavaScript app, like a to-do list, shows you can add interactivity.</p>
                    <p> Learning React and creating a basic app, such as a weather forecast app, demonstrates your ability to use modern frameworks. React helps you manage state and create reusable components. This experience builds confidence for more advanced projects.</p>
                    <p> To keep improving, work on small projects that gradually get harder. Join online communities like Stack Overflow or GitHub for advice and support. Practice regularly, follow tutorials, and read about good coding practices. Document your work and build a portfolio to showcase your achievements.</p>
                    
                    <h2>Technologies Stack</h2>
                    <div className="technologies">
                        <div className="tech-icon-container">
                            <FaDatabase className="tech-icon" style={{ color: '#00758f' }} />
                            <span className="tech-name">Database</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaHtml5 className="tech-icon" style={{ color: 'black' }} />
                            <span className="tech-name">HTML5</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaBootstrap className="tech-icon" style={{ color: '#563d7c' }} />
                            <span className="tech-name">Bootstrap</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaCss3Alt className="tech-icon" style={{ color: '#264de4' }} />
                            <span className="tech-name">CSS3</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
                            <span className="tech-name">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default About;
