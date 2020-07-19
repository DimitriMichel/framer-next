import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import '../sass/styles.sass';

const titleLogo = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HomePage = () => {
  return (
    <div>
      <div className="main-image-container">
        <img className="main-image" src="/pink.jpg" />
        <div className="subtext-container">
          <div className="artist-name">Ava Sucreé</div>
          <div className="date">42.4387° N, 71.3401° W</div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
