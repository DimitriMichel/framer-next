import React from 'react';
import '../styles.css';
// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
// Once this page is added restart the development server
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
