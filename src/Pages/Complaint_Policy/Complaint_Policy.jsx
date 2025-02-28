import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Complaint_Policy_Seo from '../../SEO/Complaint_Policy_Seo';

function Complaint_Policy() {
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
                    <Complaint_Policy_Seo/>
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Complaint Policy</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>Complaint Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="th-blog-wrapper blog-details space-top space-extra-bottom legal-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="th-blog">
                                       <div className="blog-content">
                                            <h4>Our complaints policy</h4>
                                            <p className="mb-2">
                                            We are committed to providing a high-quality money transfer service to all of our customers. If you
                                            are not satisfied with the service you have received, please get in touch.
                                            </p>
                                            <p className="mb-2">
                                            You can contact us in writing, by post, or e-mail via the contact details below. The address is:
                                            </p>
                                            <ul className="features two">
                                                <li className="end">
                                                    By Post: <NavLink to="/" target='_blank'>Ssremit Ltd, 84b High Street, Southall, London, England, UB1 3DB</NavLink>
                                                </li>
                                                <li>
                                                    By Email: <NavLink to='mailto:admin@ssremit.com'> admin@ssremit.com</NavLink>
                                                </li>
                                            </ul>
                                            <p className="mb-2">
                                            Please provide as many details as you can in your complaint. All letters you receive from us give the
                                            contact details of the person who sent them, and usually a reference number.
                                            </p>
                                            <p className="mb-2">To help us investigate and resolve the problem as quickly as possible, please make sure you always
                                            give us the following information:</p>
                                            <ul className="features two">
                                                <li>
                                                Full name and address;
                                                </li>
                                                <li>
                                                Your transaction reference number (if your complaint relates to a particular transaction);
                                                </li>
                                                <li>
                                                Your daytime phone number (if possible); and
                                                </li>
                                                <li>
                                                Full details of your concern or complaint, including any previous dealings with us about it;
                                                </li>
                                                <li>
                                                Copies of any relevant documents such as letters;
                                                </li>
                                                <li>
                                                Details of what would you like us to do.
                                                </li>
                                            </ul>
                                            <p className='mb-2'>
                                            We acknowledge the receipt of your complaint in writing within 48 hours and confirm who handles
                                            your complaint, and how you can contact them.
                                            </p>
                                            <p>
                                            We shall investigate your concerns and respond to you promptly and at the latest within 15 days
                                            </p>
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

export default Complaint_Policy
