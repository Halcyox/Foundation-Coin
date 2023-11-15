// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Made For Developers. <br></br>Interplanetary Scale. <br></br>Fast for everyone.</h1>
      <p className={styles.subtitle}>Time to bring blockchain to the whole solar system. Foundation Coin supports experiences across vast distances, everyday users, and all the rest.</p>
      <div className={styles.ctaContainer}>
        {/* Use ctaButton classes for primary button styles */}
        <button className={`${styles.button} ${styles.ctaButton}`}>Start Building</button>
        {/* Use ctaButtonSecondary for secondary button styles */}
        <button className={`${styles.button} ${styles.ctaButtonSecondary}`}>Read Docs</button>
      </div>
    </div>
  );
};

export default Hero;
