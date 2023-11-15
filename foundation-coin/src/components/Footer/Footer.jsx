import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h5>Managed by</h5>
          <p>Foundation Systems</p>
          {/* Social Icons Here */}
        </div>
        <div className={styles.footerSection}>
          <h5>FOUNDATION COIN</h5>
          {/* List of links */}
        </div>
        <div className={styles.footerSection}>
          <h5>GET CONNECTED</h5>
          {/* List of links */}
        </div>
        {/* Other sections */}
      </div>
    </footer>
  );
};

export default Footer;
