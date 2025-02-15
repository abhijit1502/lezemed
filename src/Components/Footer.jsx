import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showCookiesConsent, setShowCookiesConsent] = useState(true);// For Cookies

    const acceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setShowCookiesConsent(false);
    };

      // Check if cookies are already accepted on mount
      useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (cookiesAccepted === "true") {
            setShowCookiesConsent(false);
        }
    }, []);

    // Function to calculate scroll percentage
    const calculateScrollPercentage = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const totalScroll = documentHeight - windowHeight;
        const scrollPercentage = (scrollTop / totalScroll) * 100;

        return scrollPercentage;
    };

    // Update scroll percentage on scroll
    const handleScroll = () => {
        const percentage = calculateScrollPercentage();
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Style object for the progress bar
    const progressBarStyle = {
        display: scrollPercentage > 0 ? 'grid' : 'none',
        background: `conic-gradient(rgb(112, 215, 21) ${scrollPercentage}%, rgb(255, 255, 255) ${scrollPercentage}%)`
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="footer-wrapper footer-layout4" data-bg-src="assets/img/bg/download-shape-1.png" style={{ backgroundImage: 'url("assets/img/bg/download-shape-1.png")'}}>
                <div className="widget-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xxl-3 col-xl-4">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo">
                                            <NavLink className="icon-masking" to="/">
                                                {/* <span data-mask-src="assets/img/logo.svg" className="mask-icon" /> */}
                                                <img src="assets/img/logo.png" alt="Le-Zemed" style={{maxWidth:'50%'}}/>
                                            </NavLink>
                                        </div>
                                        <p className="about-text">
                                       Le-Zemed Limited, registered with Companies House under company number 16193962, is authorized.
                                            {/*Le-Zemed Limited, registered with Companies House under company number 15867016, is authorized and regulated by the FCA under Firm Reference Number [insert FRN if applicable]. */}
                                        </p>
                                        <div className="th-social">
                                            <NavLink to="https://www.facebook.com/"><i className="fab fa-facebook-f" /></NavLink>
                                            <NavLink to="https://www.twitter.com/"><i className="fab fa-twitter" /></NavLink>
                                            <NavLink to="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></NavLink>
                                            <NavLink to="https://www.whatsapp.com/"><i className="fab fa-whatsapp" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                                            <li><NavLink to="/help">Help</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Legals Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><NavLink to="/terms-and-conditions">Terms and Conditions</NavLink></li>
                                            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                            <li><NavLink to="/complaint-policy">Complaint Policy</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Contact Details</h3>
                                    <div className="th-widget-contact">
                                        <div className="info-box">
                                            <div className="box-icon"><img src="assets/img/icon/location.svg" /></div>
                                            <p className="box-text">84b High Street, Southall, England, UB1 3DB
                                            </p>
                                        </div>
                                        <div className="info-box">
                                            <div className="box-icon"><img src="assets/img/icon/mail.svg" /></div>
                                            <p className="box-text">
                                                <NavLink to="mailto:info@eremitly.com" className="box-link">aabileh@hotmail.com</NavLink>
                                            </p>
                                        </div>
                                        <div className="info-box">
                                            <div className="box-icon"><img src="assets/img/icon/call.svg" /></div>
                                            <p className="box-text">
                                                <NavLink to="tel:447878210109" className="box-link">+44 7878 210109</NavLink>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap text-center">
                    <div className="container">
                        <p className="copyright-text">
                            Copyright ©<script type="text/javascript ">document.write(new Date().getFullYear());</script> <NavLink to="/">Le-Zemed </NavLink>All Rights Reserved. | Powered By <NavLink to="https://www.calyx-solutions.com/ " target="_blank ">Calyx Solutions.</NavLink>
                            {/* <NavLink to="/">Le-Zemed </NavLink>All Rights Reserved. | Powered By <NavLink to="https://www.calyx-solutions.com/ " target="_blank ">Calyx Solutions.</NavLink> */}
                        </p>
                    </div>
                </div>
            </footer>


            {/* Progress bar */}

            <div className="scroll-top show" id="progress" style={progressBarStyle} onClick={scrollToTop}>
                <span id="progress-value">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }} />
                    </svg>
                </span>
            </div>

            {showCookiesConsent && (
                <div className="wrapper-cookie">
                    <div className="d-flex gap-2" style={{ alignItems: 'flex-start' }}>
                        <img src="assets/img/cookies.png" alt="cookies consent" />
                        <h5 className='text-white'>Cookies Consent</h5>
                    </div>
                    <div className="content">
                        <p className='text-white'>
                            We use cookies to improve your browsing experience and for marketing purposes.
                        </p>
                        <div >
                            <button className="th-btn style7 active" onClick={acceptCookies}>
                                <span className='txt'>I understand</span>
                            </button>
                            <NavLink to="/privacy-policy" className="item ms-3" style={{ textDecoration: 'underline' }}>
                                Privacy Policy
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;
