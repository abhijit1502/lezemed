import React from 'react';
import { Helmet } from 'react-helmet';

function Data_Safety_Seo() {
  return (
    <div>
      <Helmet>
                <title>Data Safety | eRemitly</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Data Safety | eRemitly" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    </div>
  )
}

export default Data_Safety_Seo
