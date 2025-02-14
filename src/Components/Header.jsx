import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null); // Track active menu item
    const [isSticky, setIsSticky] = useState(false); // State for sticky class

    const handleMenuToggle = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleMenuItemClick = (index) => {
        setActiveMenuItem(activeMenuItem === index ? null : index);
    };

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true); // Add sticky class when scrolled
            } else {
                setIsSticky(false); // Remove sticky class when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`th-menu-wrapper ${isMenuVisible ? 'th-body-visible' : ''}`}>
                <div className="th-menu-area text-center">
                    <button className="th-menu-toggle" onClick={handleMenuToggle}>
                        <i className="fal fa-times" />
                    </button>
                    <div className="mobile-logo">
                        <NavLink to="/"><img src="assets/img/logo.svg" alt="Le-Zemed" /></NavLink>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li>
                                <NavLink to="/money-transfer">Money Transfer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/help">Help</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>

                        <div className="p-2 mt-3">
                            <NavLink to="/" className="th-btn mb-2" style={{ display: 'block' }}>Sign Up</NavLink>
                            <NavLink to="/" className="th-btn mb-2" style={{ display: 'block' }}>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <header className="th-header header-layout4 header-absolute">
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="menu-area">
                        <div className="container-fluid p-0">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <NavLink className="icon-masking" to="/">
                                            <img src="assets/img/logo.png" alt="Le-Zemed" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu style2 d-none d-lg-inline-block">
                                        <ul>
                                            <li>
                                                <NavLink to="/money-transfer">Money Transfer</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about-us">About Us</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/help">Help</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/contact">Contact Us</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-lg-none"
                                        onClick={handleMenuToggle}
                                    >
                                        <i className="far fa-bars" />
                                    </button>

                                    <div className="d-none d-lg-inline-block">
                                        <div className="header-button">
                                            <NavLink to="/" className="th-btn d-none d-xl-block">Sign Up</NavLink>
                                            <NavLink to="/" className="th-btn d-none d-xl-block">Login</NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
