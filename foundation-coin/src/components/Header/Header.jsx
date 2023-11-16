// src/components/Header/Header.jsx

import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState({
    learn: false,
    build: false,
    solutions: false,
    network: false,
    community: false,
  });

  const toggleDropdown = (section) => {
    setDropdownOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderDropdownItem = (section) => (
    <li className={styles.navItem} onClick={() => toggleDropdown(section)}>
      {section.charAt(0).toUpperCase() + section.slice(1)}
      <span className={`${styles.arrow} ${isDropdownOpen[section] ? styles.up : ''}`}>&#9662;</span>
      {isDropdownOpen[section] && (
        <ul className={styles.dropdownContent}>
          <li>Thanks for clickin'</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more dropdown items here */}
        </ul>
      )}
    </li>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Foundation Coin</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {renderDropdownItem('learn')}
          {renderDropdownItem('build')}
          {renderDropdownItem('solutions')}
          {renderDropdownItem('network')}
          {renderDropdownItem('community')}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
