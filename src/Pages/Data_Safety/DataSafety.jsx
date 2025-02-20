import React, { useEffect, useState } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Data_Safety_Seo from '../../SEO/Data_Safety_Seo';

function DataSafety() {
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
                    <Data_Safety_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Data Safety</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/help">Help</a></li>
                                    <li>Data Safety</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-12">
                                    <div className="title-area text-center">
                                        <h2 className="sec-title sec-title2">Data Safety</h2>
                                        <p>
                                            If you have completed your registration with Le-Zemed but haven’t initiated any transaction, then you can send us a request to delete your account with us. Deleting your account will remove your data we have stored with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center justify-content-center">
                                <h3 className="mb-2">Temporary Account Deletion</h3>
                                <p className="mb-5">
                                    Please follow the below steps to delete your account on a temporary basis.
                                </p>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/1.png" alt="Data Safety" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <strong>Step 1:</strong> Go to the dashboard and open
                                                the ‘Settings’ tab. Click on the ‘Delete My Account’ option.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/2.png" alt="Data Safety" />
                                        <div className="card-body">
                                            <p className="card-text mb-4">
                                                <strong>Step 2:</strong> Click the ‘Yes’ option to
                                                temporarily delete your account.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/3.png" alt="Data Safety" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <strong>Step 3:</strong> To proceed with your request, please click on
                                                the ‘Yes’ option. We will delete all your data
                                                records stored in our system. You can cancel the request by clicking on
                                                the ‘No’ option.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="row text-center justify-content-center">
                                <h3 className="mb-2 mt-3">Permanent Account Deletion</h3>
                                <p className="mb-5">
                                    Please follow the below steps to delete your account permanently.
                                </p>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/1.png" alt="Data Safety?" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <strong>Step 1:</strong> Go to the dashboard and open
                                                the ‘Settings’ tab. Click on the ‘Delete My Account’ option.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/2.png" alt="Data Safety?" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <strong>Step 2:</strong> Click on the ‘No. Delete my account
                                                permanently’ option to delete your account
                                                permanently.
                                            </p>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/4.png" alt="Data Safety?" />
                                        <div className="card-body">
                                            <p className="card-text mb-4">
                                                <strong>Step 3:</strong> Your request for account
                                                deletion will be submitted. Our team will reach out to you shortly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card cardcss" style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0', borderRadius: 35 }}>
                                        <img className="card-img-top" src="assets/img/data-safety/5.png" alt="Data Safety?" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <strong>Step 4:</strong> To proceed with your request, please click on
                                                the ‘Yes’ option. We will delete all your data
                                                records stored in our system.&nbsp;You can cancel the request by
                                                clicking on the ‘No’ option.
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

export default DataSafety
