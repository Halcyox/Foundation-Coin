// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import MonolithScene from '../Monolith/Monolith'; // Adjust the import path
import CoinModel from '../CoinModel/CoinModel'; // Adjust the import path
import RotatingRing from '../Ring/Ring';
import earthSunriseImage from './earthsunrise.png'; // Import the image


const Hero = () => {
  const monolithPositions = [
    [1, 0, 0],
    // [-5, 0, -5], // Example position, you can change it as needed
    // [5, 1, 0],
  ];

  return (
    <div className={styles.hero}>
      {/* New Dramatic Sections for Content */}
      <h1 className={styles.title}>Foundation Coin</h1>
      <section className={styles.dramaticSection}>
        {/* <h2>An Interplanetary Ledger</h2> */}
        <p>Foundation Coin’s blockchain structure takes into account the variable orbital distance of the planets in realtime, as this creates unique ledger syncing delays not accounted for by the original Bitcoin whitepaper.</p>
        <p> It’s SWIFT for the Solar System. An architecture being built today—for tomorrow.</p>
        <a href="https://www.foundationcoin.com/s/FC3.pdf" className={styles.whitePaperLink}>White Paper 1</a>
      </section>

      <div className={styles.contentBox}>
        {/* <p className={styles.subtitle}>
          Empowering interplanetary connections.
        </p>
        <button className={`${styles.button} ${styles.ctaButton}`}>Explore Tech</button> */}

        <div>
          <br />
          <RotatingRing />
          {/* <CoinModel /> */}
        </div>
      </div>

      {/* <div className={styles.imagePlaceholder}></div> */}

      {/* {monolithPositions.map((position, index) => (
        <div key={index}>
          <MonolithScene position={position}>
            <iframe
              title={`iframe-${index}`}
              src={`data:text/html,<html><body><p>This is some text on the iframe.</p></body></html>`}
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </MonolithScene>
        </div>
      ))} */}

      {/* Monolith Container */}
      <div className={styles.monolithContainer}>
        <div className={styles.monolith}>
          <section className={styles.dramaticSection} alignment = "centered">
            <h2>An Artificial Intelligence Central Bank</h2>
            <p>Satoshi had an implicit mechanism for the “monetary supply” of Bitcoins, in the coinbase transaction/block reward.</p>
            <p>Foundation Coin has dynamic block rewards, guided by AI</p>
            <a href="https://www.foundationcoin.com/s/FC-Final.pdf" className={styles.whitePaperLink}>White Paper 2</a>
          </section>
        </div>
      </div>

      <section className={styles.dramaticSection}>
        <h2>A Cleaner Home Base</h2>
            <p>Foundation Coin requires that each mined block is matched with an associated carbon offset, paid for by miners, proportional to the estimated electricity cost.</p>
            <p>Fueling the future, not burning the present.</p>
      </section>

      {/* Image Container */}
      <div className={styles.imageContainer}>
        {/* Import the image using the 'earthSunriseImage' variable */}
        <img src={earthSunriseImage} alt="Earth Sunrise" style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
      </div>

      <div className={styles.contentBox}>
        <h2>More experiments coming soon</h2>
        {/* <a href="#content" className={styles.skipToContent}>Skip to Content</a> */}
          {/* <p className={styles.subtitle}>
            Innovate. Scale. Thrive.
          </p> */}
          {/* <button className={`${styles.button} ${styles.ctaButtonSecondary}`}>View Roadmap</button> */}
        </div>
      {/* Additional Content Sections */}
      <div className={styles.additionalContent}>

        
      </div>
    </div>
  );
};

export default Hero;
