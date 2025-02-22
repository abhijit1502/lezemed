import React, { useEffect, useState } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import About_Seo from '../../SEO/About_Seo';

function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simulating a 1-second delay
    }, []);
    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <About_Seo />
                    <Header />
                    {/*<< Breadcrumb Section Start >>*/}
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">About Us</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*About Section Here */}
                    <div className="overflow-hidden space background-image" style={{ backgroundImage: 'url("assets/img/bg/bg-green.png")' }}>
                        <div className="container">
                            <div className="row gy-5 align-items-center">
                                <div className="col-xl-6">
                                    <div className="">
                                        <div className="title-area mb-35 pe-xl-4 me-xl-3">
                                            <span className="sub-title">About Us</span>
                                            <h2 className="sec-title">Le-Zemed</h2>
                                            <p className="mb-2">
                                                Le Zemed is your trusted partner in fast, secure, and hassle-free international money transfers. We provide a seamless way to send money to Uthopia, Uganda, Djibouti, Africa, Somalia, ensuring your transactions are safe, reliable, and cost-effective.
                                            </p>
                                            <p className="mb-2">
                                                Our platform is designed for efficiency and transparency, offering competitive exchange rates and low transfer fees with no hidden charges. Whether you're supporting family, paying for services, or managing global transactions, Le Zemed makes it easy to transfer funds with confidence.
                                            </p>
                                            <p className="mb-2">
                                                With advanced security measures and a user-friendly experience, we are committed to providing a trusted and convenient solution for all your international money transfer needs.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Le Zemed – Seamless Transfers You Can Trust.</strong>
                                            </p>
                                        </div>
                                        <div className="about-feature-wrap">
                                            <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                                                <div className="box-icon"><img src="assets/img/icon/quick-transfer.svg" alt="Icon" /></div>
                                                <div className="media-body">
                                                    <h3 className="box-title">High speeds</h3>
                                                    <p className="box-text">
                                                        We send money around the world in minutes.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                                                <div className="box-icon"><img src="assets/img/icon/low-cost.svg" alt="Icon" /></div>
                                                <div className="media-body">
                                                    <h3 className="box-title">Low fees</h3>
                                                    <p className="box-text">
                                                        We offer brilliant rates and really low fees—by keeping our own costs down.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                                                <div className="box-icon"><img src="assets/img/icon/hassle-free.svg" alt="Icon" /></div>
                                                <div className="media-body">
                                                    <h3 className="box-title">No hassle</h3>
                                                    <p className="box-text">
                                                        Le-Zemed is super easy to use, backed up by outstanding Customer Support.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mb-30 mb-xl-0">
                                    <img src="assets/img/normal/about-us.png" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About Section Here */}
                    {/* Footer Section Here */}
                    <Footer />
                </>
            )}
        </>
    );
}

export default AboutUs
