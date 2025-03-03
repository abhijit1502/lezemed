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
                    <Complaint_Policy_Seo />
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
                                            <p className='mb-2'>
                                                We shall investigate your concerns and respond to you promptly and at the latest within 15 days of receipt of the complaint. In exceptional situations, if the answer cannot be
                                                given within 15 business days for reasons beyond our control, we send a holding
                                                reply, clearly indicating the reasons for a delay in answering the complaint and
                                                specifying the deadline by which we can provide the final reply. In any event, the
                                                deadline for receiving the final reply shall not exceed 35 business days.
                                            </p>
                                            <p className='mb-2'>
                                                In our final response we include:
                                            </p>
                                            <ul className="features two">
                                                <li>
                                                    Summary of the complaint;
                                                </li>
                                                <li>
                                                    A summary of the outcomes of your investigation;
                                                </li>
                                                <li>
                                                    Whether we acknowledge there has been any fault on our part and
                                                    whether the complaint is upheld;
                                                </li>
                                                <li>
                                                    Details of any offer to settle the complaint and the duration of the offer;
                                                </li>
                                                <li>
                                                    If you are a client, a notification of your right to refer to the Financial
                                                    Ombudsman Service.
                                                </li>
                                            </ul>
                                            <p className='mb-2'>
                                                If you are not satisfied with the Complaints Handling or dissatisfied with the final
                                                response you have received, you can write to The Financial Ombudsman Service
                                                (FOS) on:
                                            </p>
                                            <ul className="features two">
                                                <li>
                                                    Online: <NavLink to="https://www.financial-ombudsman.org.uk/" target='_blank'>https://www.financial-ombudsman.org.uk/</NavLink>
                                                </li>
                                                <li>
                                                    Email: <NavLink to="mailto:complaint.info@financial-ombudsman.org.uk">complaint.info@financial-ombudsman.org.uk</NavLink>
                                                </li>
                                                <li>
                                                    By post: The Financial Ombudsman, Exchange Tower, London, E14 9SR.
                                                </li>
                                                <li>
                                                    Telephone: <NavLink to="tel:08000234567">0800 023 4567</NavLink> or <NavLink to="tel:0300 123 9123">0300 123 9123</NavLink>
                                                    Weekdays from 8:00am-8:00pm (GMT), and on Saturday from 9:00am-1:00pm (GMT).
                                                </li>
                                            </ul>
                                            <p className='mb-2'>
                                                <strong>Online complaint form:</strong> <NavLink to="https://help.financial-ombudsman.org.uk/help" target='_blank'>https://help.financial-ombudsman.org.uk/help</NavLink>
                                            </p>
                                            <p>
                                                The FOS has been established as the official independent expert in settling
                                                complaints between consumers and businesses providing financial services. You
                                                can obtain a copy of the FOS explanatory leaflet from Ssremit Ltd or by contacting
                                                FOS directly at the above-given address. In addition, please note that disputes
                                                may also be submitted for online resolution via the European Online Dispute
                                                Resolution Platform accessible at: <NavLink to="http://ec.europa.eu/odr." target='_blank'>http://ec.europa.eu/odr.</NavLink>.
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
