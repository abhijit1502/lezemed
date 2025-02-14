import React from 'react';
import { Helmet } from 'react-helmet';

function Finish_Seo() {
  return (
    <div>
      <Helmet>
                <title>Onboarding | eRemitly</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Onboarding | eRemitly" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    </div>
  )
}

export default Finish_Seo
