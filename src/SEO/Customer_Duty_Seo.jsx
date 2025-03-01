import React from 'react';
import { Helmet } from 'react-helmet';

function Customer_Duty_Seo() {
    return (
        <div>
            <Helmet>
                <title>Customer Duty | SSRemit</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Customer Duty | SSRemit" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
        </div>
    )
}

export default Customer_Duty_Seo
