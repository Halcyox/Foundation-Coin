// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Powerful for developers. <br></br>Fast for everyone.</h1>
      <p className={styles.subtitle}>Bring blockchain to the people. Foundation Coin supports experiences for power users, new consumers, and everyone in between.</p>
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
