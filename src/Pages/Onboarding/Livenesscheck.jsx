import React, { useEffect, useState } from 'react';
import '../../css/steps.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Livenesscheck_Seo from '../../SEO/Livenesscheck_Seo';

function Livenesscheck() {
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
                    <Livenesscheck_Seo />
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
                                                <li id="confirm"><strong>Finish</strong></li></NavLink>
                                        </ul>
                                        {/* fieldsets */}
                                        <fieldset>
                                            <div className="form-card">
                                                <div className="row justify-content-center">
                                                    <h4 className="mb-4">Taking Perfect Photo</h4>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto1.png" alt="Taking Perfect Photo" />
                                                            <div className="card-body">
                                                                <p className="card-text">Make sure the camera has a consistent aspect ratio, so it does not stretch the image in any direction.</p>
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
                                                            <img className="card-img-top" src="assets/img/photo/takephoto7.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text mb-4">Avoid shadows on the face or a strong side light.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto3.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text">Make sure your face is within the circle guidelines shown on the screen.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto4.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text mb-4">Make sure you are in a well-lit room that is not too dark.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto2.png" alt="What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text">Turn off any filters that might distort the image but keep the white light correction ON.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto6.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text">Avoid having a light source behind the person's head, such as from a window.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto8.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text">Avoid anything covering the face, such as masks, hats, sunglasses or hair flopping over the face.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4">
                                                        <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                            <img className="card-img-top" src="assets/img/photo/takephoto5.png" alt=" What to avoid?" />
                                                            <div className="card-body">
                                                                <p className="card-text">For active liveness only - When performing actions such as turn right, do not over-rotate the face to 90 degrees, an angle of 35 degrees should be enough. Start with the camera raised so there is space to look down.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <NavLink to="/onboarding" type="button" className="th-btn style777 mt-4">Previous</NavLink>&emsp;
                                            <NavLink to="/finish" type="button" className="th-btn style7 mt-4">Next</NavLink>
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

export default Livenesscheck
