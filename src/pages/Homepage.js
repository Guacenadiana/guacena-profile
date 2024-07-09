import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import profileImage from '../images/profile.png';  // Import the image
import dashboardImage from '../images/dashboard.png'; // Importing your project image
import blogImage from '../images/blog.png'; // Adjust path as per your project structure
import ReactTypingEffect from 'react-typing-effect';
import './Homepage.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation


const Homepage = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        config: { duration: 1000 }  // Adjust the duration as needed
    });

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset the video to the beginning
        }
    };

    return (
        <div className="homepage">
            <div className="intro-section">
                <div className="text-section">
                    <h1>IT Enthusiast/Junior Web Developer</h1>    
            <br />
            <div className="typing-effect">
            <p>Bachelor of Science in Information Technology</p>
            
        </div>

                </div>
                <div style={styles} className="image-section">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>

            </div>
            <div className="recent-projects-section">
                <div className="projects-header">
                    <h1 className="recent-projects-title">Recent Projects</h1>
                    <Link to="/projects" className="view-all-button">View All</Link>
                </div>
                <div className="projects-content">
                    <div className="project-side">
                        <div className="project-card">
                            <div className="project-info">
                                <h2>Capstone System</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={dashboardImage} alt="Dashboard Project" />
                            </div>
                        </div>
                    </div>
                    <div className="project-side">
                        <div className="project-card dark-bg">
                            <div className="project-info">
                                <h2>Blog Website</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={blogImage} alt="blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inquiries-section">
                <h1 className="inquiries-title">Want to know more?</h1>
                <p className="inquiries-description">Are you navigating the world of web development as a junior developer like me? 
                    Whether you have questions about coding, design, or collaborating on projects, Let's connect! </p>
                <Link to="/contact" className="inquiries-button">Contact Me</Link>
            </div>
        </div>
    );
}

export default Homepage;
