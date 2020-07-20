import React, { useEffect, useState } from 'react';
import '../sass/styles.sass';
import ProgressiveImage from 'react-progressive-image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="model">
        <motion.span className="first" variants={firstName}>
          <motion.span variants={letter}>A</motion.span>
          <motion.span variants={letter}>n</motion.span>
          <motion.span variants={letter}>a</motion.span>

        </motion.span>
        <motion.span className="last" variants={lastName}>
          <motion.span variants={letter}>S</motion.span>
          <motion.span variants={letter}>w</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>t</motion.span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Model;
