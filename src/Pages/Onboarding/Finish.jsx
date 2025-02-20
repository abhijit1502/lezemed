import React, { useEffect, useState } from 'react';
import '../../css/steps.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Finish_Seo from '../../SEO/Finish_Seo';

function Finish() {
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
                    <Finish_Seo />
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
                                                <li className="active" id="confirm"><strong>2) Liveness Check</strong></li></NavLink>
                                            <NavLink to="/finish">
                                                <li className="active" id="confirm"><strong>Finish</strong></li></NavLink>
                                        </ul>
                                        {/* fieldsets */}
                                        <fieldset>
                                            <div className="form-card">
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss">
                                                            <img className="card-img-top" src="assets/img/photo/finishimg.png" alt="Finish Image" />
                                                            <div className="card-body">
                                                                <p className="card-text">On completion of your IDScan and Liveness check you will get a success screen to confirm completion of onboarding.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-12 text-center">
                                                        <h6 className="purple-text text-center mt-3">If you have any further questions then please visit our Onboarding FAQs page.</h6>
                                                    </div>
                                                    <div className='col-xl-6 col-lg-6 col-12'>
                                                        <NavLink to="/onboarding-faq" className="th-btn mt-3">FAQs</NavLink>
                                                    </div>
                                                </div>
                                            </div>
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

export default Finish
