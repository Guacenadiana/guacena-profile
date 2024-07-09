import React from 'react';
import './Experience.css';
import { useSpring, animated } from '@react-spring/web';
import certImage1 from '../images/Cert1.jpg'; // Import certificate images
import certImage2 from '../images/Cert2.jpg';
import certImage3 from '../images/Cert3.jpg';

const Experience = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="experience-container">
            <h1 className="section-title">Experience</h1>
            <div className="experience-content">
                <div className="experience-item">
                    <div className="job">
                        <h2>Presented our Capstone Project on BSIT 3rd Student Colloquium</h2>
                        <p>Central Philippines State University</p>
                        <p>We were granted an opportunity to showcase our capstone project titled 
                            "Socioeconomic and Demographic Profile P.O for the National Greening Program with Data Analytics."</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="job">
                        <h2>On the Job Training</h2>
                        <p>During my on-the-job training at the Mayor's Office,
                             I had the opportunity to leverage advanced technology for document management and administration tasks.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="job">
                        <h2>Seminars and Workshops</h2>
                        <p>Central Philippines State University</p>
                        <p>I participate in different seminars and workshops covering diverse and innovative topics. </p>
                        <p>1. ARTIFIAL INTELLIGENCE : Machine Learning with Computer Vision  </p>
                        <p>2. Ai Illustrator for logo design: from sketch to vector  </p>
                        <p>3. VIDEOGRAPHY: Introduction to the latest techniques for efficient video creation with Ai </p>
                        <p>4. STEGANOGRAPHY: Hiding in plain sight: Key concept od steganography and its application  </p>
                    </div>
                </div>
            </div>
            <div className="certifications-container">
                <h1 className="section-title">Certifications</h1>
                <div className="certification">
                    <div className="certification-item">
                        <h3>Certificate of Appreciation</h3>
                        <p>BSIT Student Colloquium</p>
                        <img src={certImage1} alt="Colloquium Certificate" className="cert-image" />
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Completion</h3>
                        <p>On the Job Training</p>
                        <img src={certImage2} alt="OJT Certificate" className="cert-image" />
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Participation</h3>
                        <p>National Youth Commision</p>
                        <img src={certImage3} alt="National Youth Commision Certificate" className="cert-image" />
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Experience;
