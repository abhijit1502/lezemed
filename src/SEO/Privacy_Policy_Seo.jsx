import React from 'react';
import { Helmet } from 'react-helmet';

function Privacy_Policy_Seo() {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy | Le-Zemed</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Privacy Policy | Le-Zemed" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
        </div>
    )
}

export default Privacy_Policy_Seo
