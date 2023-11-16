// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';
import MonolithScene from '../Monolith/Monolith'; // Adjust the import path

const Hero = () => {
  const monolithPositions = [
    [0, 0, 0],
    [-4, 0, 0], // Example position, you can change it as needed
    [4, 0, 0],  // Example position, you can change it as needed
    // Add more positions here
  ];

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Beyond Boundaries: <br/> Blockchain for the Cosmos</h1>
      <div className={styles.contentBox}>
        <p className={styles.subtitle}>
          Empowering interplanetary connections.
        </p>
        <button className={`${styles.button} ${styles.ctaButton}`}>Explore Tech</button>
        
        {monolithPositions.map((position, index) => (
          <div key={index}>
            <MonolithScene position={position}>
              {/** Add your iframe content here */}
              <iframe title="empty" src="about:blank" style={{ width: '100%', height: '100%' }}></iframe>
            </MonolithScene>
          </div>
        ))}
      </div>

      <div className={styles.imagePlaceholder}></div>
      <div className={styles.contentBox}>
        <p className={styles.subtitle}>
          Innovate. Scale. Thrive.
        </p>
        <button className={`${styles.button} ${styles.ctaButtonSecondary}`}>View Roadmap</button>
      </div>
    </div>
  );
};

export default Hero;
