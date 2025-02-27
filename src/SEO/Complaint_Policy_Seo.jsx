import React from 'react';
import { Helmet } from 'react-helmet';

function Complaint_Policy_Seo() {
    return (
        <div>
            <Helmet>
                <title>Complaint Policy | SSRemit</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Complaint Policy | SSRemit" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
        </div>
    )
}

export default Complaint_Policy_Seo
