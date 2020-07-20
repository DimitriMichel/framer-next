import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Link, Route, Router, Switch } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomePage = () => {
  return (
    <div>
      <div className="image-and-subtext">
        <div className="main-image-container">
          <ProgressiveImage src="/pink.jpg" placeholder="/pinkprog.jpg">
            {(src) => (
              <motion.img
                className="main-image"
                src={src}
                alt="Ava Sweet"
                whileHover={{ scale: 1.3 }}
                transition={transition}
              />
            )}
          </ProgressiveImage>
        </div>
        <motion.div className="subtext-container">
          <div className="artist-name">Ava Sweet</div>
          <div className="date">42.4387° N, 71.3401° W</div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
