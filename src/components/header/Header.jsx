import { useState } from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = ({ name, setName, about, setAbout }) => {
  // Добавляю состояние для класса, который делает попап видимым
  const [popupActive, setPopupActive] = useState(false);
  // Добавляю состояния для имени и описания персонажа

  return (
    <header className={styles.header}>
      <Profile handleSetActive={setPopupActive} name={name} about={about} />
      <EditPopup
        active={popupActive}
        setActive={setPopupActive}
        setName={setName}
        setAbout={setAbout}
      />
    </header>
  );
};

export default Header;
