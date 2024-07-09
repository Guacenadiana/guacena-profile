import React from 'react';
import './Projects.css'; // Assuming you have a Projects.css for styling
import blogImage from '../images/blog.png'; // Adjust path as per your project structure
import calculatorImage from '../images/calculator.png'; // Adjust path as per your project structure
import sampleVideo from '../videos/sample-video.mp4'; // Importing sample video
import { useSpring, animated } from '@react-spring/web';

const Projects = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="projects-container">
            <div className="container-title">
                <h1>Projects</h1>
                <p className="subtitle">"Review my collection of projects to see the range of work I've completed."</p>
            </div>
            <div className="projects-content">
                <div className="project-card">
                    <div className="project-info">
                        <h2>Personal Blog Website</h2>
                    </div>
                    <div className="project-image zoom">
                        <img src={blogImage} alt="blog Project" />
                    </div>
                </div>
                <div className="project-card dark-bg">
                    <div className="project-info">
                        <h2>Calculator</h2>
                    </div>
                    <div className="project-image zoom">
                        <img src={calculatorImage} alt="calculator Project" />
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-info">
                        <h2>Capstone Project</h2>
                    </div>
                    <video controls>
                        <source src={sampleVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </animated.div>
    );
}

export default Projects;
