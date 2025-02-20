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
                                                We are committed to providing a high-quality money transfer service to all our clients. When something goes wrong, we need you to tell us about it. This will help us to improve our standards.
                                            </p>
                                            <p>
                                                If you have a complaint, please contact us with the details.
                                            </p>
                                        </div>
                                       <div className="blog-content">
                                            <h4>Definitions</h4>
                                            <ul className="features two pt-2">
                                                <li>
                                                    By Email: <NavLink to='mailto:aabileh@hotmail.com'>aabileh@hotmail.com</NavLink>
                                                </li>
                                                <li>
                                                    By Phone: <NavLink to="tel:447878210109">+44 7878 210109</NavLink>
                                                </li>
                                                <li className="end">
                                                    By Post: <NavLink to="/" target='_blank'>84b High Street, Southall, England, UB1 3DB</NavLink>
                                                </li>
                                            </ul>
                                            <p className='mt-3'>
                                                We have eight weeks to consider your complaint. If we have not resolved it within this time you may complain to the Financial Ombudsman Service.
                                            </p>
                                        </div>
                                       <div className="blog-content">
                                            <h4>What will happen next?</h4>
                                            <ul className="features two pt-2">
                                                <li>
                                                    We will send you a letter/email acknowledging receipt of your complaint on the same day of receiving it, enclosing a copy of this procedure. If you have complained in person or on call, we will try to resolve and reach the solution the same day.
                                                </li>
                                                <li>
                                                    If we are unable to resolve your complaint on the same day then we will further investigate your complaint. This will normally involve finding details of your complaint, reviewing your matter by speaking to the member of staff who acted for you.
                                                </li>
                                                <li>
                                                    We will respond to you within 7 days with our Final Response which may be a remedial action.
                                                </li>
                                                <li className="end">
                                                    If you are still not satisfied, you can then contact the Financial Ombudsman Service, about your complaint. Normally, you will need to bring a complaint to the Financial Ombudsman Service within six months of receiving a final written response from us about your complaint. For further information, you should contact the Financial Ombudsman Service on:
                                                    <ul className='pt-3'>
                                                        <li>
                                                            Online: <NavLink to="https://www.financial-ombudsman.org.uk/" target='_blank'>https://www.financial-ombudsman.org.uk/</NavLink>
                                                        </li>
                                                        <li>
                                                            Email: <NavLink to="mailto:complaint.info@financial-ombudsman.org.uk">complaint.info@financial-ombudsman.org.uk</NavLink> ,
                                                        </li>
                                                        <li>
                                                            By post: The Financial Ombudsman Service Exchange Tower, London, E14 9SR
                                                        </li>
                                                        <li>
                                                            Phone: <NavLink to="tel:08000234567">0800 023 4 567</NavLink> (free), <NavLink to="tel:03001239123">0300 123 9 123</NavLink>, weekdays from 8:00am - 8:00pm (GMT), and on Saturday from 9:00 - 1:00pm (GMT).
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    If you're not in the UK, call <NavLink to="tel:447878210109">+44 7878 210109</NavLink>.
                                                </li>
                                            </ul>
                                            <p>
                                                FOS will not charge you for making a complaint and if you are not satisfied with the outcome you can still bring legal proceedings. In addition, please note that disputes may also be submitted for online resolution via the European Online Dispute Resolution Platform accessible at: <NavLink to="http://ec.europa.eu/odr" target='_blank'>http://ec.europa.eu/odr</NavLink>
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
