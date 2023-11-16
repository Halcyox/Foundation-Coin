import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* <div className={styles.footerSection}>
          <p className={styles.managedBy}>Managed by Foundation Systems</p>
        </div> */}
        <div className={styles.footerSection}>
          <h5>FOUNDATION COIN</h5>
          <ul className={styles.linkList}>
            <li><a href="mailto:general@foundationcoin.com">General Inquiries</a></li>
            <li><a href="mailto:press@foundationcoin.com">Press</a></li>
            <li><a href="mailto:employment@foundationcoin.com">Careers</a></li>
          </ul>
        </div>
        {/* <div className={styles.footerSection}>
          <h5>GET CONNECTED</h5>
          <ul className={styles.linkList}>
            <li><a href="#">CS</a></li>
            <li><a href="#">Crypto</a></li>
            <li><a href="#">Discrete Math</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Administrative</a></li>
            <li><a href="#">Technical Operations</a></li>
          </ul>
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <p>©2023 FoundationCoin Inc. - All rights reserved</p>
        <p>fundamentum futurum</p>
      </div>
    </footer>
  );
};

export default Footer;
