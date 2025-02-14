import React, { useEffect, useState, useRef } from 'react';
import '../../css/steps.css';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import Onboarding_FAQ_Seo from '../../SEO/Onboarding_FAQ_Seo';

function OnboardingFAQ() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                    <Onboarding_FAQ_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Onboarding FAQs</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/help">Help</a></li>
                                    <li>Onboarding FAQs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden space" id="faq-sec">
                        <div class="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="accordion-area accordion" id="faqAccordion">
                                        <div className="accordion-card style3">
                                            <div className="accordion-header" id="collapse-item-1">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                                    I'm getting a black blank screen. What should I do?
                                                </button>
                                            </div>
                                            <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion" style={{}}>
                                                <div className="accordion-body">
                                                     <p className="faq-text mb-2">Does your screen look something like this?</p>
                                                    <div className="row" >
                                                        <div className="col-6 col-md-5 col-lg-2" >
                                                            <div className="cardcss" >
                                                                <img className="card-img-top" src="assets/img/photo/blankscreen1.png" alt="I'm getting a black blank screen. What should I do?" />
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-5 col-lg-2" >
                                                            <div className="cardcss" >
                                                                <img className="card-img-top" src="assets/img/photo/blankscreen2.png" alt="I'm getting a black blank screen. What should I do?" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <p className="faq-text mb-2 mt-1">
                                                        This means the CAMERA access to your default BROWSER is denied. Please follow the steps below to Allow camera access.
                                                    </p>
                                                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row style1" id="pills-tab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link active" id="pills-cloud-tab" data-bs-toggle="pill" href="#iOS" role="tab" aria-controls="pills-cloud" aria-selected="true" >
                                                                <div className="text-center py-2" >
                                                                    <h6 className="mb-0">iOS</h6>
                                                                </div>
                                                            </a>
                                                            {/*end nav link*/}
                                                        </li>
                                                        {/*end nav item*/}
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="pills-smart-tab" data-bs-toggle="pill" href="#android" role="tab" aria-controls="pills-smart" aria-selected="false" tabIndex={-1} >
                                                                <div className="text-center py-2" >
                                                                    <h6 className="mb-0">Android</h6>
                                                                </div>
                                                            </a>
                                                            {/*end nav link*/}
                                                        </li>
                                                        {/*end nav item*/}
                                                    </ul>
                                                    {/*end nav pills*/}
                                                    <div className="row" >
                                                        <div className="col-12 mt-1 pt-1" >
                                                            <div className="tab-content" id="pills-tabContent" >
                                                                <div className="tab-pane fade show active" id="iOS" role="tabpanel" aria-labelledby="pills-cloud-tab" >
                                                                    <div className="row align-items-center" >
                                                                        <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0" >
                                                                            <div className="full mb-1" >
                                                                                <div className="row wow fadeInUp animated animated animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }} >
                                                                                    <div className="col-12 col-md-12 col-xs-12 offset-xs-1" >
                                                                                         <p className="faq-text mb-2">i. Go to Settings → Safari</p>
                                                                                        <div className="row" >
                                                                                            <div className="col-12 col-md-5 col-lg-3" >
                                                                                                <div className="cardcss" >
                                                                                                    <img className="card-img-top" src="assets/img/photo/apple1.png" alt="Step1" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                         <p className="faq-text mb-2 mt-2">ii. Scroll to find "Camera" under SETTINGS FOR WEBSITES section</p>
                                                                                        <div className="row" >
                                                                                            <div className="col-12 col-md-5 col-lg-3" >
                                                                                                <div className="cardcss" >
                                                                                                    <img className="card-img-top" src="assets/img/photo/apple2.png" alt="Step2" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                         <p className="faq-text mb-2 mt-2">iii. Tap on Camera option and you will be navigated to CAMERA ACCESS ON ALL WEBSITES. Tap on "Allow" option.</p>
                                                                                        <div className="row" >
                                                                                            <div className="col-12 col-md-5 col-lg-3" >
                                                                                                <div className="cardcss" >
                                                                                                    <img className="card-img-top" src="assets/img/photo/apple3.png" alt="Step1" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/*end col*/}
                                                                    </div>
                                                                    {/*end row*/}
                                                                </div>
                                                                {/*end teb pane*/}
                                                                <div className="tab-pane fade" id="android" role="tabpanel" aria-labelledby="pills-smart-tab" >
                                                                    <div className="row align-items-center" >
                                                                        <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0" >
                                                                             <p className="faq-text mb-2">i. Go to Settings and tap on Apps</p>
                                                                            <div className="row" >
                                                                                <div className="col-12 col-md-5 col-lg-3" >
                                                                                    <div className="cardcss" >
                                                                                        <img className="card-img-top" src="assets/img/photo/ad1.png" alt="Step1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                             <p className="faq-text mb-2 mt-2">ii. Scroll to find your default browser app. Mostly it is Google Chrome for Android device, unless explicitly changed.</p>
                                                                            <div className="row" >
                                                                                <div className="col-12 col-md-5 col-lg-3" >
                                                                                    <div className="cardcss" >
                                                                                        <img className="card-img-top" src="assets/img/photo/ad2.png" alt="Step2" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                             <p className="faq-text mb-2 mt-2">iii. Chrome → Permissions will show you what is enabled. Camera permission need to be enabled here. </p>
                                                                            <div className="row" >
                                                                                <div className="col-12 col-md-5 col-lg-3" >
                                                                                    <div className="cardcss" >
                                                                                        <img className="card-img-top" src="assets/img/photo/ad3.png" alt="Step3" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                             <p className="faq-text mb-2 mt-2">iv. App permissions will show what is allowed and what's denied.</p>
                                                                            <div className="row" >
                                                                                <div className="col-12 col-md-5 col-lg-3" >
                                                                                    <div className="cardcss" >
                                                                                        <img className="card-img-top" src="assets/img/photo/ad4.png" alt="Step4" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                             <p className="faq-text mb-2 mt-2">v. Tap on Camera to Allow camera permission to Chrome.</p>
                                                                            <div className="row" >
                                                                                <div className="col-12 col-md-5 col-lg-3" >
                                                                                    <div className="cardcss" >
                                                                                        <img className="card-img-top" src="assets/img/photo/ad5.png" alt="Step5" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/*end col*/}
                                                                    </div>
                                                                    {/*end row*/}
                                                                </div>
                                                                {/*end teb pane*/}
                                                            </div>
                                                            {/*end tab content*/}
                                                        </div>
                                                        {/*end col*/}
                                                    </div>
                                                    {/*end row*/}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-card style3">
                                            <div className="accordion-header" id="collapse-item-2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                    I'm getting error message saying, 'Wrong ID document or something went wrong...
                                                </button>
                                            </div>
                                            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion" style={{}}>
                                                <div className="accordion-body">
                                                     <p className="faq-text mb-2">Does your screen look something like this?</p>
                                                    <div className="row">
                                                        <div className="col-6 col-md-5 col-lg-3">
                                                            <div className="cardcss">
                                                                <img className="card-img-top" src="assets/img/photo/ID Upload failure.png" alt="Wrong ID document or something went wrong." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="faq-text mt-2">
                                                        This means the ID you uploaded is not supported or was having glare or blur while uploading. This may have resulted us in not been able to capture ID details. Please give it another try or contact our support team.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

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

export default OnboardingFAQ