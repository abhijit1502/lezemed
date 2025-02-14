import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Help_Seo from '../../SEO/Help_Seo';

function Help() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <Help_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Help</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>Help</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="help-area space">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-between">
                                <div className="col-lg-7">
                                    <div className="title-area text-center text-lg-start">
                                        <span className="sub-title sub-title2 mb-3">For Documents</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav nav-tabs help-tabs" id="nav-tab" role="tablist">
                                <NavLink to="/onboarding" className="nav-link">
                                    <img src="assets/img/photo/kyc.png" />
                                    <span className="box-title">KYC Upload</span>
                                </NavLink>
                            </div>
                            <hr />
                            <div className="row align-items-center justify-content-center justify-content-lg-between">
                                <div className="col-lg-7">
                                    <div className="title-area text-center text-lg-start">
                                        <span className="sub-title sub-title2 mb-3">For Safety</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav nav-tabs help-tabs" id="nav-tab" role="tablist">
                                <NavLink to="/data-safety" className="nav-link">
                                    <img src="assets/img/photo/data-safety.png" />
                                    <span className="box-title">Data Safety</span>
                                </NavLink>
                            </div>
                            <hr />
                            <div className="row align-items-center justify-content-center justify-content-lg-between">
                                <div className="col-lg-7">
                                    <div className="title-area text-center text-lg-start">
                                        <span className="sub-title sub-title2 mb-3">For FAQ's</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav nav-tabs help-tabs" id="nav-tab" role="tablist">
                                <NavLink to="/onboarding-faq" className="nav-link">
                                    <img src="assets/img/photo/onbordingfaq.png" />
                                    <span className="box-title">Onboarding FAQs</span>
                                </NavLink>
                                <NavLink to="/generalfaq" className="nav-link">
                                    <img src="assets/img/photo/faq.png" />
                                    <span className="box-title">General FAQs</span>
                                </NavLink>
                            </div>
                            <hr />
                            <div className="row align-items-center justify-content-center justify-content-lg-between">
                                <div className="col-lg-7">
                                    <div className="title-area text-center text-lg-start">
                                        <span className="sub-title sub-title2 mb-3">For Any Help</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav nav-tabs help-tabs" id="nav-tab" role="tablist">
                                <NavLink to="https://api.whatsapp.com/send?phone=447446228131&amp;text=Hello There, I would like to enquire about money transfer." className="nav-link" target='_blank'>
                                    <img src="assets/img/photo/chat.png" />
                                    <span className="box-title">Chat</span>
                                </NavLink>
                                <NavLink to="tel:447446228131" className="nav-link">
                                    <img src="assets/img/photo/phone.png" />
                                    <span className="box-title">Phone</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden space" style={{display:'none'}}>
                        <div className="container">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="choose-feature th-ani" style={{ backgroundColor: 'rgb(112, 215, 21)' }}>
                                        <NavLink to="/onboarding">
                                            <div className="box-img"><img className="img" src="assets/img/photo/kyc.png" alt="Icon" /></div>
                                            <div className="box-content">
                                                <h3 className="box-title">KYC Upload</h3>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="choose-feature th-ani" style={{ backgroundColor: 'rgb(112, 215, 21)' }}>
                                        <NavLink to="/data-safety">
                                            <div className="box-img"><img className="img" src="assets/img/photo/data-safety.png" alt="Icon" /></div>
                                            <div className="box-content">
                                                <h3 className="box-title">Data Safety</h3>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="choose-feature th-ani" style={{ backgroundColor: 'rgb(112, 215, 21)' }}>
                                        <NavLink to="/onboarding-faq">
                                            <div className="box-img"><img className="img" src="assets/img/photo/onbordingfaq.png" alt="Icon" /></div>
                                            <div className="box-content">
                                                <h3 className="box-title">Onboarding FAQs</h3>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="choose-feature th-ani" style={{ backgroundColor: 'rgb(112, 215, 21)' }}>
                                        <NavLink to="/generalfaq">
                                            <div className="box-img"><img className="img" src="assets/img/photo/faq.png" alt="Icon" /></div>
                                            <div className="box-content">
                                                <h3 className="box-title">General FAQs</h3>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="choose-feature th-ani" style={{ backgroundColor: 'rgb(112, 215, 21) ' }}>
                                        <NavLink to="/contact">
                                            <div className="box-img"><img className="img" src="assets/img/photo/contactinfo.png" alt="Icon" /></div>
                                            <div className="box-content">
                                                <h3 className="box-title">Contact Info</h3>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Help
