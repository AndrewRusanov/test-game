import React from 'react';
import styles from './Header.module.css';
// import Avatar from './profile/avatar/Avatar';
import Profile from './profile/Profile';

const Header = () => {
  return (
    <header className={styles.header}>
      <Profile />
    </header>
  );
};

export default Header;
