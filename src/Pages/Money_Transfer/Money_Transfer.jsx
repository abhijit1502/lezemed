import React, { useEffect, useState, useRef } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import Money_Transfer_Seo from '../../SEO/Money_Transfer_Seo';
import CalculatorMoney from '../../Components/CalculatorMoney';
import CorridorsSlider from '../../Components/CorridorsSlider';

function Money_Transfer() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulating a 1-second delay
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Money_Transfer_Seo />
          <Header />
          <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
            <div className="container">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">Money Transfer</h1>
                <ul className="breadcumb-menu">
                  <li><a href="/">Home</a></li>
                  <li>Money Transfer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden space pb-1 background-image" style={{ backgroundImage: 'url("assets/img/bg/bg-green.png")' }} id="about-sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="title-area text-center">
                    <span className="sub-title">Fast & Easy way to send money</span>
                    <h2 className="sec-title">Trustworthy Money Transfer Service</h2>
                  </div>
                </div>
              </div>
              <div className="row gy-4 justify-content-between align-items-center">
                <div className="col-xl-5">
                  <CalculatorMoney />
                </div>
                <div className="col-xl-7">
                  <div className="about-wrapp">
                    <div className="about-content ms-xl-2">
                      <p>
                        We offer a reliable solution for all your money transfer needs, ensuring a safe and secure way to send funds internationally. Our process is clear and easy to follow, making transfers simple and hassle-free. No matter where you're sending money globally, you can trust our service to deliver it securely to the right place.
                      </p>
                      <div className="checklist style2 mb-40">
                        <ul>
                          <li>Your money is protected by our fraud and security teams.</li>
                          <li>2-factor authentication secures your account.</li>
                          <li>Money is held in established financial institutions.</li>
                        </ul>
                      </div>
                      <div className="btn-group mt-5">
                        <NavLink to="/" className="th-btn style10" target='_blank'>Send Money</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-2'>                
              <CorridorsSlider />
              </div>
            </div>
          </div>

          <div className="process-sec overflow-hidden space">
            <div className="container">
              <div className="title-area text-center mb-30">
                <span className="sub-title">Send money</span>
                <h2 className="sec-title">Reasons to choose SRemit</h2>
              </div>
              <div className="process-box-area">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="process4-image global-img">
                      <img src="assets/img/normal/money-transfer.png" alt />
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-6 process-box-wrap">
                        <div className="process-box">
                          <div className="box-number">
                            <img src="assets/img/icon/payment.png" />
                          </div>
                          <div className="box-content">
                            <h2 className="box-title">Global Payments</h2>
                            <p className="box-text">
                              Join us for worldwide access to an expansive and user-friendly network of partners, making your deposits and withdrawals easier than ever!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 process-box-wrap">
                        <div className="process-box">
                          <div className="box-number">
                            <img src="assets/img/icon/service.png" />
                          </div>
                          <div className="box-content">
                            <h2 className="box-title">24/7 Service</h2>
                            <p className="box-text">
                              Our online money transfer service is available at your fingertips through our website, dedicated customer support team, and user-friendly mobile app!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 process-box-wrap">
                        <div className="process-box">
                          <div className="box-number">
                            <img src="assets/img/icon/rate.png" />
                          </div>
                          <div className="box-content">
                            <h2 className="box-title">Competitive Rates</h2>
                            <p className="box-text">
                              Compare our rates with others! We offer clear and competitive pricing, so you save more when you choose us!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 process-box-wrap">
                        <div className="process-box">
                          <div className="box-number">
                            <img src="assets/img/icon/safe.png" />
                          </div>
                          <div className="box-content">
                            <h2 className="box-title">Safe and Secure</h2>
                            <p className="box-text">
                              Experience top-notch privacy with our cutting-edge data encryption technology, ensuring your information is always secure!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Section Start */}
          <div className="about-area4 bg-mask" id="about-sec" style={{ maskImage: 'url("assets/img/bg/testi_bg_shape.png")' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="title-area mb-35"><span className="sub-title">Download our app</span>
                    <h2 className="sec-title">Save time with the SRemit app</h2></div>
                  <p className="mt-n2 mb-25">
                    Start your money transfer journey with the SRemit app. Download from the Play Store or App Store and enjoy exclusive benefits, including:
                  </p>
                  <div className="checklist style3 mb-35">
                    <ul>
                      <li><i className="fa-solid fa-circle-check" />Easy sign up</li>
                      <li><i className="fa-solid fa-circle-check" />Save time with Repeat Transfer</li>
                      <li><i className="fa-solid fa-circle-check" />Track your payments in real time</li>
                      <li><i className="fa-solid fa-circle-check" />Pay using your favourite Payment Method</li>
                    </ul>
                  </div>
                  <h6><em>Make your global money transfers smoother with SRemit.</em></h6>
                  <div className="btn-group mt-35">
                    <NavLink target="_blank" to="https://play.google.com/">
                      <img src="assets/img/theme-img/play-store-btn.png" alt="img" />
                    </NavLink>
                    <NavLink target="_blank" to="https://www.apple.com/store">
                      <img src="assets/img/theme-img/apple-btn.png" alt="img" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 mt-30 mt-xl-0">
                  <div className="img-box8">
                    <div className="img1">
                      <img src="assets/img/normal/download-2-1.png" alt="Mobile App" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile App Section End */}

          {/* FAQs Section Here */}
          <div className="overflow-hidden space" id="faq-sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="title-area text-center pe-xl-3 ps-xl-3">
                    <span className="sub-title">Our FAQ'S</span>
                    <h2 className="sec-title">Frequently Ask Questions</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="accordion-area accordion" id="faqAccordion">
                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                          Why do you need my documents while registration?
                        </button>
                      </div>
                      <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion" style={{}}>
                        <div className="accordion-body">
                          <p className="faq-text">
                            We are regulated by Financial Conduct Authority in the UK. It is our legal binding to verify your identity as a UK resident.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                          How can I cancel my transfer?
                        </button>
                      </div>
                      <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion" style={{}}>
                        <div className="accordion-body">
                          <p className="faq-text">
                            Please call us or email us at earliest possible if you want to cancel your transfer. Transfer paid out to the recipient cannot be cancelled. If you have paid for your transfer and the transfer is not processed yet, then please contact us by phone and we will make necessary arrangements for refunds. We may charge you a small fee as handling/service charge and refund you the balance amount.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                          Will I get notifications about Transfer status?
                        </button>
                      </div>
                      <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p className="faq-text">
                            Yes. We send email notifications to keep you informed. You can even view the transfer status by signing in into your web account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                          How many recipients I can add?
                        </button>
                      </div>
                      <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p className="faq-text">
                            There is no restriction on the number of recipients you may have on your account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                          You asked me to upload one more document; how can I do that?
                        </button>
                      </div>
                      <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p className="faq-text">
                            Please login in to your account and under My Account you will find document section where you can upload the document.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                          How can I pay for my transfer?
                        </button>
                      </div>
                      <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p className="faq-text">
                            Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <NavLink to="/generalfaq" className="th-btn style7 mt-4">View more</NavLink>
              </div>
            </div>
          </div>

          {/* Footer Section Here */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Money_Transfer
