import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Components/Preloader';
import Error_Seo from '../SEO/Error_Seo';


function Error() {
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
                    <Error_Seo />

                    <section className="space">
                        <div className="container">
                            <div className="error-img"><img src="assets/img/theme-img/error.svg" alt="404 image" /></div>
                            <div className="error-content">
                                <h2 className="error-title">Opps! Page not found</h2>
                                <p className="error-text">We're sorry, the page you have looked for does not exist in our database! Maybe go to our home page or try to use a search?</p>
                                <NavLink to="/" className="th-btn"><i className="fal fa-home me-2" />Back To Home</NavLink></div>
                        </div>
                    </section>

                </div>
            )}
        </div>
    );
}

export default Error
