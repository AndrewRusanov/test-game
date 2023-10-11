import React from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = () => {
  return (
    <header className={styles.header}>
      <Profile />
      <EditPopup />
    </header>
  );
};

export default Header;
