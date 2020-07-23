import React from 'react';
import '../sass/styles.sass';
import { AnimatePresence } from 'framer-motion';
// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
// Once this page is added restart the development server
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
