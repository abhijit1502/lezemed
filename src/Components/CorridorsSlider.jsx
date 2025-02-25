import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function CorridorsSlider() {
    return (
        <div className="swiper brand-slider">
            <Swiper
                loop={true}
                spaceBetween={0}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                centeredSlides={false}
                roundLengths={true}
                pagination={{
                    el: '.testimonial-pagination',
                    clickable: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 }, // Mobile view
                    768: { slidesPerView: 2 }, // Small tablets
                    992: { slidesPerView: 4 }, // Tablets and desktops
                    1200: { slidesPerView: 4 },
                    1400: { slidesPerView: 4 },
                    1920: { slidesPerView: 4 },
                }}
                modules={[Pagination, Autoplay]}
            >
                     <SwiperSlide>
                    <NavLink to="#">
                        <div className="flag-div d-flex align-items-center">
                            <div className="flag-mr">
                                <img className="flag-img" src="assets/img/flags/afn.png" alt="Money Transfer to Africa" />
                            </div>
                            <div className="currency-code">
                                <h4>Africa</h4>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to="#">
                        <div className="flag-div d-flex align-items-center">
                            <div className="flag-mr">
                                <img className="flag-img" src="assets/img/flags/etb.png" alt="Money Transfer to Ethiopia" />
                            </div>
                            <div className="currency-code">
                                <h4>Ethiopia</h4>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to="#">
                        <div className="flag-div d-flex align-items-center">
                            <div className="flag-mr">
                                <img className="flag-img" src="assets/img/flags/ugx.png" alt="Money Transfer to Uganda" />
                            </div>
                            <div className="currency-code">
                                <h4>Uganda</h4>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to="#">
                        <div className="flag-div d-flex align-items-center">
                            <div className="flag-mr">
                                <img className="flag-img" src="assets/img/flags/djf.png" alt="Money Transfer to Djibouti" />
                            </div>
                            <div className="currency-code">
                                <h4>Djibouti</h4>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to="#">
                        <div className="flag-div d-flex align-items-center">
                            <div className="flag-mr">
                                <img className="flag-img" src="assets/img/flags/sos.png" alt="Money Transfer to Somalia" />
                            </div>
                            <div className="currency-code">
                                <h4>Somalia</h4>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CorridorsSlider;
