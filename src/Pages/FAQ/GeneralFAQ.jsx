import React, { useEffect, useState, useRef } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import General_FAQ_Seo from '../../SEO/General_FAQ_Seo';

function GeneralFAQ() {
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
          <General_FAQ_Seo />
          <Header />
          <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
            <div className="container">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">General FAQs</h1>
                <ul className="breadcumb-menu">
                  <li><a href="/help">Help</a></li>
                  <li>General FAQs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="overflow-hidden space" id="faq-sec">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6">
                  <div class="title-area text-center pe-xl-3 ps-xl-3">
                    <span className="sub-title sub-title2">Our FAQ'S</span>
                    <h2 className="sec-title">Frequently Asked Questions</h2>
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

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                          Why I received email stating transfer complete, but the money is not with recipient?
                        </button>
                      </div>
                      <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p className="faq-text">
                            Our pay-out partner bank/agent may have completed the transfer process but the recipient's bank would not have displayed it in their account. Please allow couple of hours to be displayed, if the problem persists then please contact our support team. We will make sure money is with your recipient as promised.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                          Good to know
                        </button>
                      </div>
                      <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="collapse-item-8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <ul className="list">
                            <li>Full name and address;</li>
                            <li>Your transaction reference number (if your complaint relates to a particular transaction);</li>
                            <li>Your daytime phone number (if possible); and</li>
                            <li>Full details of your concern or complaint, including any previous dealings with us about it;</li>
                            <li>Copies of any relevant documents such as letters;</li>
                            <li>Details of what would you like us to do.</li>
                            {/* <li>Age: 18 years and above</li>
                            <li>We will verify your identity, this will not affect your credit ratings</li>
                            <li>You must be resident of the UK</li>
                            <li>Activation of account will be based on the documents you provide</li>
                            <li>Monthly sending limits may apply</li> */}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-card style3">
                      <div className="accordion-header" id="collapse-item-9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                          Documents Required
                        </button>
                      </div>
                      <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="collapse-item-9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <ul className="list">
                            <li>Age: 18 years and above</li>
                            <li>We will verify your identity, this will not affect your credit ratings</li>
                            <li>You must be resident of the UK</li>
                            <li>Activation of account will be based on the documents you provide</li>
                            <li>Monthly sending limits may apply</li>
                          </ul>
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

export default GeneralFAQ;
