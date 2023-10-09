import React from 'react';
import styles from './Header.module.css';
import Avatar from './avatar/Avatar';
import Profile from './profile/Profile';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Тут должно быть изображение, имя персонажа и описание + возможность это менять */}
      <Avatar />
      <Profile />
    </header>
  );
};

export default Header;
