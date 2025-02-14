import React, { useEffect, useState } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Contact_Us_Seo from '../../SEO/Contact_Us_Seo';

function ContactUs() {
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', phoneno: '', msg: '' });
    const [errors, setErrors] = useState({});
    const [captchaToken, setCaptchaToken] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) {
            formErrors.name = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            formErrors.name = 'Name can only contain letters and spaces';
        }
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }
        if (!formData.phoneno) {
            formErrors.phoneno = 'Phone number is required';
        } else if (!/^\d{10,15}$/.test(formData.phoneno)) {
            formErrors.phoneno = 'Phone number is invalid';
        }
        if (!formData.msg) {
            formErrors.msg = 'Message is required';
        }
        if (!captchaToken) {
            formErrors.captcha = 'Captcha is required';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://eremitly.com/prod/api/contactus/savecontactdetails', { ...formData, captchaToken });
                console.log('Form submitted successfully:', response.data);
                setFormData({ name: '', email: '', phoneno: '', msg: '' });
                setCaptchaToken('');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <Contact_Us_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Contact Us</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space">
                        <div className="container">
                            <div className="row gy-4 flex-row-reverse">                                
                                <div className="col-lg-6 col-xl-5">
                                    <div className="contact-item-wrap">
                                        <div className="title-area mt-n2 mb-40">
                                            <h3 className="sec-title">Contact Info</h3>
                                            <p className>If you need information or support, feel free to contact us.</p>
                                        </div>                                        
                                        <div className="contact-item">
                                            <div className="contact-item_icon">
                                                <i className><img src="assets/img/icon/location.svg" style={{maxWidth:'50%'}} /></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="contact-item_title">Address</span>
                                                <span className="contact-item_text">12 Old Bond Street, London, England, W1S 4PW</span>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-item_icon">
                                                <i className><img src="assets/img/icon/call.svg" style={{maxWidth:'50%'}}/></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="contact-item_title">Phone Number</span>
                                                <span className="contact-item_text">
                                                <NavLink to="tel:447446228131">+44 7446 228131</NavLink>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-item_icon">
                                                <i className><img src="assets/img/icon/mail.svg" style={{maxWidth:'50%'}}/></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="contact-item_title">Email Id</span>
                                                <span className="contact-item_text">
                                                    <NavLink to="mailto:info@eremitly.com">info@eremitly.com</NavLink>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <form className="contact-form2 input-smoke ajax-contact" id="contact-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-control" />
                                                {errors.name && <span className="error">{errors.name}</span>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Enter Email Id"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-control" />
                                                {errors.email && <span className="error">{errors.email}</span>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    name="phoneno"
                                                    placeholder="Enter Phone Number"
                                                    value={formData.phoneno}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-control" />
                                                {errors.phoneno && <span className="error">{errors.phoneno}</span>}
                                            </div>

                                            <div className="form-group col-12">
                                                <textarea
                                                    placeholder="Your Message"
                                                    name="msg"
                                                    value={formData.msg}
                                                    onChange={handleInputChange}
                                                    required
                                                    id="message" cols={5} rows={1} className="form-control" defaultValue={""} />
                                                {errors.msg && <span className="error">{errors.msg}</span>}
                                            </div>
                                            <div className="form-group col-12">
                                                <ReCAPTCHA
                                                    sitekey="6LcqslAqAAAAAMWpwOqPnhXT8GGsVhzHHmdpEmoi"
                                                    onChange={handleCaptchaChange}
                                                />
                                                {errors.captcha && <span className="error">{errors.captcha}</span>}
                                            </div>
                                            <div className="form-btn col-12">
                                                <button type="submit" className="th-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
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

export default ContactUs;
