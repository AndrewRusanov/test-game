import React, { useState } from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = () => {
  // Добавляю состояние для класса, который делает попап видимым
  const [popupActive, setPopupActive] = useState(false);

  return (
    <header className={styles.header}>
      <Profile handleSetActive={setPopupActive} />
      <EditPopup active={popupActive} setActive={setPopupActive} />
    </header>
  );
};

export default Header;
