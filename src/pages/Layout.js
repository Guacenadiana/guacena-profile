import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaBars } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './Layout.css';

function Layout() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <header>
                <div className="left-section">
                    <NavLink to="/" className="name-link">
                        <h1>Diana Guacena</h1> {/* Replace 'Your Name' with your actual name */}
                        <p className="navbar-text"></p> {/* Additional text below the name */}
                    </NavLink>
                </div>
                <nav className="navbar">
                    <FaBars className="hamburger" onClick={toggleNav} />
                    <ul className={isNavVisible ? 'show' : ''}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="right-section">
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.facebook.com/diannaguacena?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/guacenadianne?igsh=MWRlbzdjaG5qcmJyeA==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="fa-instagram" />
                            </a>
                        </li>
                        <li>
                        <a href="https://github.com/Guacenadiana" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="fa-github" />
                        </a>
                    </li>
                        <li>
                            <a href="https://www.tiktok.com/@diyanna_00?_t=8npOBTbPWC5&_r=1" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="fa-tiktok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* <hr/> */}

            <div className="content">
                <Outlet />
            </div>

            <footer>
                <p>&copy; Diana Guacena</p>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/diannaguacena?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/guacenadianne?igsh=MWRlbzdjaG5qcmJyeA==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="fa-instagram" />
                        </a>
                    </li>
                    <li>
                    <a href="https://github.com/Guacenadiana" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="fa-github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@diyanna_00?_t=8npOBTbPWC5&_r=1" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="fa-tiktok" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Layout;
