import React from 'react';
import styles from './Header.module.css';
import Avatar from './avatar/Avatar';
import Profile from './profile/Profile';

const Header = () => {
  return (
    <header className={styles.header}>
      <Avatar />
      <Profile />
    </header>
  );
};

export default Header;
