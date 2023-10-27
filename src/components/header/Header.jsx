import { useState } from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = ({ name, about, setValues, params, setParams, skills }) => {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <header className={styles.header}>
      <Profile
        handleSetActive={setPopupActive}
        name={name}
        about={about}
        params={params}
        setParams={setParams}
        skills={skills}
      />
      <EditPopup
        active={popupActive}
        setActive={setPopupActive}
        setValues={setValues}
        params={params}
        setParams={setParams}
      />
    </header>
  );
};

export default Header;
