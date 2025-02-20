import React, { useEffect, useState } from 'react';
import '../../css/steps.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Onboarding_Seo from '../../SEO/Onboarding_Seo';

function Onboarding() {
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
                    <Onboarding_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Onboarding</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/help">Help</a></li>
                                    <li>KYC Upload</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-12">
                                    <div className="title-area text-center">
                                        <h2 className="sec-title sec-title2">KYC Documents Upload</h2>
                                        <p>
                                        On our mobile app to complete your onboarding process we require your Photo ID and a selfie. We use ID Scan solution which takes less than a minute to complete this for you. 
                                        </p>
                                    </div>

                                    <div id="msform">
                                            {/* progressbar */}
                                            <ul id="progressbar">
                                                <NavLink to="/onboarding">
                                                    <li className="active" id="confirm"><strong>1) Scanning Your Id</strong></li></NavLink>
                                                <NavLink to="/livenesscheck">
                                                    <li id="confirm"><strong>2) Liveness Check</strong></li></NavLink>
                                                <NavLink to="/finish">
                                                    <li id="confirm"><strong>Finish</strong></li></NavLink>
                                            </ul>
                                            {/* fieldsets */}
                                            <fieldset>
                                                <div className="form-card">
                                                    <div className="row justify-content-center">
                                                        <h4 className="mb-4">How To Scan Id?</h4>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid1.png" alt="How to scan Id?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Try not to take the photo from any other angle. It will work regardless, but parallel is better.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid2.png" alt="How to scan Id?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Try not to take the photo from any other angle. It will work regardless, but parallel is better.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="hrcss" />
                                                    <div className="row justify-content-center">
                                                        <h4 className="mb-4 mt-2">What to avoid?</h4>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid4.png" alt=" What to avoid?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Please avoid flash or glares.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid6.png" alt=" What to avoid?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Please avoid shadows over the ID.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid7.png" alt=" What to avoid?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Please remove any background clutter.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid3.png" alt=" What to avoid?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Please make sure your details aren't blurry.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                                <img className="card-img-top" src="assets/img/photo/scanid5.png" alt=" What to avoid?" />
                                                                <div className="card-body">
                                                                    <p className="card-text">Please make sure you are not cropping or skewing the ID.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <NavLink to="/livenesscheck" className="th-btn mt-4">Next</NavLink>
                                            </fieldset>
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

export default Onboarding
