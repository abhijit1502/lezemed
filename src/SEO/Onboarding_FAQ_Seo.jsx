import React from 'react';
import { Helmet } from 'react-helmet';

function Onboarding_FAQ_Seo() {
  return (
    <div>
       <Helmet>
                <title>General FAQs | SRemit</title>
                <meta name="description" content="" />
                <meta property="og:title" content="General FAQs | SRemit" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    </div>
  )
}

export default Onboarding_FAQ_Seo
