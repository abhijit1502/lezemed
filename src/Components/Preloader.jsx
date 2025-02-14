import React from 'react'

function Preloader() {
    return (
        <div>
            {/* Preloader Section Here */}
            <div id="preloader" className="preloader">
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading" />
                        <div className="preloader-logo">
                            <a className="icon-masking" href="/">
                                {/* <span data-mask-src="assets/img/preloader.svg" className="mask-icon" /> */}
                                <img src="assets/img/preloader.png" alt="eRemitly" />
                            </a>
                    </div>
                    </div>
                </div>
            </div>


            {/* Preloader Section End */}

        </div>
    )
}

export default Preloader
