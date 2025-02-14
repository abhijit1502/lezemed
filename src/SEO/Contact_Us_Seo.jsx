import React from 'react';
import { Helmet } from 'react-helmet';


function Contact_Us_Seo() {
  return (
    <div>
       <Helmet>
                <title>Contact Us | Le-Zemed</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Contact Us | Le-Zemed" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    </div>
  )
}

export default Contact_Us_Seo
