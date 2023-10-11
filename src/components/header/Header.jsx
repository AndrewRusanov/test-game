import React, { useState } from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = () => {
  // Добавляю состояние для класса, который делает попап видимым
  const [popupActive, setPopupActive] = useState(false);
  // Добавляю состояния для имени и описания персонажа
  const [nameValue, setNameValue] = useState(`Бэтмен`);
  const [aboutValue, setAboutValue] = useState(
    `Бэтмен является решительным и бесстрашным борцом за справедливость. Он всегда готов прийти на помощь тем, кто в ней нуждается, и не боится противостоять даже самым опасным преступникам.`
  );

  return (
    <header className={styles.header}>
      <Profile handleSetActive={setPopupActive} name={nameValue} about={aboutValue} />
      <EditPopup
        active={popupActive}
        setActive={setPopupActive}
        setName={setNameValue}
        setAbout={setAboutValue}
      />
    </header>
  );
};

export default Header;
