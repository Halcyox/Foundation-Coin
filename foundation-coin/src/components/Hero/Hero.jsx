// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import MonolithScene from '../Monolith/Monolith'; // Adjust the import path
import CoinModel from '../CoinModel/CoinModel'; // Adjust the import path
import RotatingRing from '../Ring/Ring';

const Hero = () => {
  const monolithPositions = [
    [1, 0, 0],
    // [-5, 0, -5], // Example position, you can change it as needed
    // [5, 1, 0],
  ];

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Beyond Boundaries: <br /> Blockchain for the Cosmos</h1>

      {/* New Dramatic Sections for Content */}
      <section className={styles.dramaticSection}>
        <h2>An Interplanetary Ledger</h2>
        <p>Foundation Coin’s blockchain structure takes into account the variable orbital distance of the planets in realtime, as this creates unique ledger syncing delays not accounted for by the original Bitcoin whitepaper.</p>
        <p>It’s SWIFT for the Solar System. An architecture being built today—for tomorrow.</p>
        <a href="/whitepaper1" className={styles.whitePaperLink}>White Paper 1</a>
      </section>

      <div className={styles.contentBox}>
        <p className={styles.subtitle}>
          Empowering interplanetary connections.
        </p>
        <button className={`${styles.button} ${styles.ctaButton}`}>Explore Tech</button>

        <div>
          <br />
          <RotatingRing />
          {/* <CoinModel /> */}
        </div>
      </div>

      <section className={styles.dramaticSection}>
        <h2>An Artificial Intelligence Central Bank</h2>
        <p>Satoshi’s Whitepaper had an implicit mechanism for the “monetary supply” of Bitcoins, in the coinbase transaction / block reward. This architecture, while successful, was a rigid design not adaptable to changing world conditions such as dynamic prices of electricity and the coin value itself vis a vis other currencies.</p>
        <p>Dynamic block rewards, guided by AI, for the evolutions of today and tomorrow.</p>
        <a href="/whitepaper2" className={styles.whitePaperLink}>White Paper 2</a>
      </section>

      <section className={styles.dramaticSection}>
        <h3>A Cleaner Home Base</h3>
        <p>Foundation Coin requires that each mined block is matched with an associated carbon offset, paid for by miners, proportional to the estimated electricity cost.</p>
        <p>Fueling the future, not burning the present.</p>
      </section>

      {/* <div className={styles.imagePlaceholder}></div> */}

      {monolithPositions.map((position, index) => (
        <div key={index}>
          <MonolithScene position={position}>
            <iframe
              title={`iframe-${index}`}
              src={`data:text/html,<html><body><p>This is some text on the iframe.</p></body></html>`}
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </MonolithScene>
        </div>
      ))}

      <div className={styles.contentBox}>
        <h2>More experiments coming soon</h2>
        {/* <a href="#content" className={styles.skipToContent}>Skip to Content</a> */}
          <p className={styles.subtitle}>
            Innovate. Scale. Thrive.
          </p>
          <button className={`${styles.button} ${styles.ctaButtonSecondary}`}>View Roadmap</button>
        </div>

      {/* Additional Content Sections */}
      <div className={styles.additionalContent}>
        

        
      </div>
    </div>
  );
};

export default Hero;
