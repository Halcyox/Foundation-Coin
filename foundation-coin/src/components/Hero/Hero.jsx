// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';
import MonolithScene from '../Monolith/Monolith'; // Adjust the import path
import CoinModel from '../CoinModel/CoinModel'; // Adjust the import path

import RotatingRing from '../Ring/Ring';

const Hero = () => {
  const monolithPositions = [
    [1, 0, 0],
    [-5, 0, -5], // Example position, you can change it as needed
    [5, 1, 0],  
  ];

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Beyond Boundaries: <br/> Blockchain for the Cosmos</h1>

      
      <div className={styles.contentBox}>
        <p className={styles.subtitle}>
          Empowering interplanetary connections.
        </p>
        <button className={`${styles.button} ${styles.ctaButton}`}>Explore Tech</button>
        
        
        <div >
          <br></br>
          < RotatingRing />
          {/* < CoinModel /> */}
        </div>

      </div>

      {monolithPositions.map((position, index) => (
          <div key={index}>
            <MonolithScene position={position}>
              {/** Add your iframe content here */}
              <iframe
                title={`iframe-${index}`}
                src={`data:text/html,<html><body><p>This is some text on the iframe.</p></body></html>`}
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            </MonolithScene>
          </div>
        ))}
      

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
