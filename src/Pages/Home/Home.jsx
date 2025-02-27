import React, { useEffect, useState, useRef } from 'react';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { NavLink } from 'react-router-dom';
import Home_Seo from '../../SEO/Home_Seo';
import Calculator from '../../Components/Calculator';

function Home() {
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
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Home_Seo />
          <Header />
          {/* Hero Section Here */}
          <div className="th-hero-wrapper hero-4" id="hero">
            <div className="th-hero-bg" data-bg-src="assets/img/bg/hero_bg_6.png" style={{ backgroundImage: 'url(assets/img/bg/hero_bg_6.png)' }} />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7">
                  <div className="hero-style4">
                    <h1 className="hero-title">
                      International <span className="square-text text-white">Money Transfer</span>
                    </h1>
                    <p className="hero-text">
                    Start your money transfer journey with the SRemit app! Download from the Play Store or App Store to send money quickly, securely, and affordably. SRemit makes international transfers fast, reliable, and hassle-free. for a few seconds.
                    </p>
                    <div className="btn-group mt-5">
                      <NavLink to="/">
                        <img src='assets/img/theme-img/play-store-btn.png' />
                      </NavLink>
                      <NavLink to="/">
                        <img src='assets/img/theme-img/apple-btn.png' />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <Calculator />
                </div>
              </div>
            </div>
            <div className="shape-mockup z-index-3 spin d-none d-xl-block" data-top="25%" data-left="5%">
              <img src="assets/img/shape/star-16.png" alt />
            </div>
            <div className="shape-mockup spin d-none d-xl-block" data-bottom="16%" data-right="6%">
              <img src="assets/img/shape/star-17.png" alt />
            </div>
          </div>
          {/* Hero Section End */}

          {/*About Section Here */}
          <div className="overflow-hidden space background-image" style={{ backgroundImage: 'url("assets/img/bg/bg-green.png")' }}>
            <div className="container">
              <div className="row gy-5 align-items-center">
                <div className="col-xl-6">
                  <div className="">
                    <div className="title-area mb-35 pe-xl-4 me-xl-3">
                      <span className="sub-title">About Us</span>
                      <h2 className="sec-title">SRemit</h2>
                      <p className="mb-2">
                      SRemit is your trusted partner in fast, secure, and hassle-free international money transfers. We provide a seamless way to send money to Uthopia, Uganda, Djibouti, Africa, Somaliya, ensuring your transactions are safe, reliable, and cost-effective.
                      </p>
                      <p className="mb-2">
                      Our platform is designed for efficiency and transparency, offering competitive exchange rates and low transfer fees with no hidden charges. Whether you're supporting family, paying for services, or managing global transactions, SRemit makes it easy to transfer funds with confidence.
                      </p>
                    </div>
                    <div className="about-feature-wrap">
                      <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                        <div className="box-icon"><img src="assets/img/icon/quick-transfer.svg" alt="Icon" /></div>
                        <div className="media-body">
                          <h3 className="box-title">High speeds</h3>
                          <p className="box-text">
                            We send money around the world in minutes.
                          </p>
                        </div>
                      </div>
                      <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                        <div className="box-icon"><img src="assets/img/icon/low-cost.svg" alt="Icon" /></div>
                        <div className="media-body">
                          <h3 className="box-title">Low fees</h3>
                          <p className="box-text">
                            We offer brilliant rates and really low fees—by keeping our own costs down.
                          </p>
                        </div>
                      </div>
                      <div className="about-feature style3" style={{ maxWidth: '100%' }}>
                        <div className="box-icon"><img src="assets/img/icon/hassle-free.svg" alt="Icon" /></div>
                        <div className="media-body">
                          <h3 className="box-title">No hassle</h3>
                          <p className="box-text">
                            SRemit is super easy to use, backed up by outstanding Customer Support.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group mt-5">
                      <NavLink to="/about-us" className="th-btn style10">Learn More</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 mb-30 mb-xl-0">
                  <img src="assets/img/normal/about-us.png" alt="About" />
                </div>
              </div>
            </div>
          </div>
          {/* About Section Here */}

          {/* Way to transfer and recived money */}
          <div className="overflow-hidden space pt-2" id="about-sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="title-area text-center"><span className="sub-title">Our Money Trasfer Ways</span>
                    <h2 className="sec-title">Convenient ways to transfer and receive money</h2></div>
                </div>
              </div>
              <div className="process-tabs-wrapper">
                <div className="nav nav-tabs process-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link th-btn active" id="nav-step1-tab" data-bs-toggle="tab" data-bs-target="#nav-step1" type="button">How to transfer money</button>
                  <button className="nav-link th-btn" id="nav-step2-tab" data-bs-toggle="tab" data-bs-target="#nav-step2" type="button">Ways to receive money</button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-step1" role="tabpanel">
                    <div className="process-wrapp">
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>01</span>
                          </div>
                          <h5 className>Transfer online</h5>
                        </div>
                        <p className="process-text">
                        Sign up to set up an account. Once your account is set up, it is easy to transfer money to a designated account. 
                        </p>
                      </div>
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>02</span>
                          </div>
                          <h5 className>Transfer with our app</h5>
                        </div>
                        <p className="process-text">
                        Download our app on the app store and play store Sign up and start sending money seamlessly.
                        </p>
                      </div>
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>03</span>
                          </div>
                          <h5 className>Transfer in person</h5>
                        </div>
                        <p className="process-text">
                        Prefer a personal touch? Visit our store at 84b High Street, Southall, England, UB1 3DB location to send money in person. Our friendly staff is here to guide you through a quick and reliable transaction every time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-step2" role="tabpanel">
                    <div className="process-wrapp">
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>01</span>
                          </div>
                          <h5 className>Bank account</h5>
                        </div>
                        <p className="process-text">
                        Receive money directly into your bank account for a safe and convenient transfer. No need to visit a location—funds are deposited securely and quickly.
                        </p>
                      </div>
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>02</span>
                          </div>
                          <h5 className>Cash pickup</h5>
                        </div>
                        <p className="process-text">
                        Need cash in hand? Collect your money from our store at 84b High Street, Southall, England, UB1 3DB instantly. A secure and hassle-free way to access your funds.
                        </p>
                      </div>
                      <div className="process-content">
                        <div className="process-title-area">
                          <div className="process-num">
                            <span>03</span>
                          </div>
                          <h5 className>Mobile wallet</h5>
                        </div>
                        <p className="process-text">
                        Get your money directly in your mobile wallet and access it anytime, anywhere. A fast and easy way to receive funds without a bank account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className='text-center'>
              <em>Choose the method that works best for you and enjoy seamless transfers with SRemit!</em>
              </h6>
            </div>
          </div>
          {/* Way to transfer and recived money end */}

          {/* Why choose us */}
          <div className="choose-area2 overflow-hidden space background-image" style={{ backgroundImage: 'url("assets/img/bg/bg-black.png")' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3">
                  <div className="choose-counter">
                    <h4 className="box-title">
                      Send Money
                    </h4>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="choose-content">
                    <div className="mb-30">
                      <span className="sub-title">Why Choose Us?</span>
                      <h2 className="sec-title text-white">SRemit ensures secure, reliable, and hassle-free money transfers you can trust.</h2>
                    </div>
                    <div className="choose-grid">
                      <div className="choose-content">
                        <div className="box-icon">
                          <img src="assets/img/icon/check2.svg" alt />
                        </div>
                        <h3 className="box-title">Committed to security</h3>
                      </div>
                      <p className="box-text">
                      Your safety is our priority. We use advanced encryption and fraud prevention measures to ensure secure and reliable money transfers.
                      </p>
                    </div>
                    <div className="choose-grid">
                      <div className="choose-content">
                        <div className="box-icon">
                          <img src="assets/img/icon/check2.svg" alt />
                        </div>
                        <h3 className="box-title">International reach</h3>
                      </div>
                      <p className="box-text">
                      Send and receive money across borders with ease. With a global network of banking partners and cash pickup locations, we make international transfers seamless.
                      </p>
                    </div>
                    <div className="choose-grid">
                      <div className="choose-content">
                        <div className="box-icon">
                          <img src="assets/img/icon/check2.svg" alt />
                        </div>
                        <h3 className="box-title">Register for free</h3>
                      </div>
                      <p className="box-text">
                      Sign up in just a few minutes—no hidden fees, no hassle. Enjoy a simple, user-friendly platform with competitive exchange rates and low transfer costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Why choose us end */}

          {/* Steps Section Here */}
          <div className="space background-image" style={{ backgroundImage: 'url("assets/img/bg/bg-green.png")' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-9">
                  <div className="title-area text-center pe-xl-3 ps-xl-3">
                    <span className="sub-title">How We Work?</span>
                    <h2 className="sec-title ">You Can Send Money With The Following Four Easy Steps</h2>
                  </div>
                </div>
              </div>
              <div className="row gy-5">
                <div className="col-xl-3 col-md-6 service-featured_wrapp">
                  <div className="service-featured">
                    <div className="box-icon" >
                      <img src="assets/img/icon/customer.svg" alt="Icon" style={{ maxWidth: '70%' }} /> <span className="box-shape"></span></div>
                    <h3 className="box-title "><a href="/">1. Create An Account</a></h3>
                    <p className="box-text ">
                    Download our app and get signed up in just minutes. It’s quick and completely free!
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-featured_wrapp">
                  <div className="service-featured">
                    <div className="box-icon">
                      <img src="assets/img/icon/transfer.svg" alt="Icon" style={{ maxWidth: '70%' }} /> <span className="box-shape"></span></div>
                    <h3 className="box-title "><a href="/">2. Set up a transfer</a></h3>
                    <p className="box-text ">
                    Add your recipient and specify the amount you wish to send or receive in the foreign currency.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-featured_wrapp">
                  <div className="service-featured">
                    <div className="box-icon">
                      <img src="assets/img/icon/securely.svg" alt="Icon" style={{ maxWidth: '70%' }} /> <span className="box-shape"></span></div>
                    <h3 className="box-title "><a href="/">3. Pay securely</a></h3>
                    <p className="box-text ">
                    Complete your payment via Bank Transfer—it's the safest and fastest method to ensure your funds are received.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 service-featured_wrapp">
                  <div className="service-featured">
                    <div className="box-icon">
                      <img src="assets/img/icon/done.svg" alt="Icon" style={{ maxWidth: '70%' }} /> <span className="box-shape"></span></div>
                    <h3 className="box-title "><a href="/">4. That's it!</a></h3>
                    <p className="box-text ">Track your transfer from the app. We payout to beneficiary as promised in
                    delivery method.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-image" style={{ backgroundImage: 'url("assets/img/bg/Bg-Green-2.jpg")' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="mb-5 mt-5 cta-btn">
                    <div className="title-area mb-0 text-center text-xl-start">
                      <h2 className="sec-title t1" style={{color:'#00a651'}}>Ready to get started?</h2>
                      <p className="brand-text mb-n2 m-0 text-white">
                        Order a transfer in less than a minute with our app.
                      </p>
                    </div>
                    <div className="btn-wrap download-btn justify-content-center justify-content-xl-start">
                      <NavLink to="#" className="th-btn style10">Sign up Now</NavLink>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
          {/* Steps Section End */}

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
                <NavLink to="/generalfaq" className="th-btn style10 mt-4">View more</NavLink>
              </div>
            </div>
          </div>
          {/* FAQs Section End */}

          {/* Footer Section Here */}
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
