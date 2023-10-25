import { useState } from 'react';
import styles from './Header.module.css';
import Profile from './profile/Profile';
import EditPopup from './editPopup/EditPopup';

const Header = ({ name, setName, about, setAbout, params, setParams }) => {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <header className={styles.header}>
      <Profile
        handleSetActive={setPopupActive}
        name={name}
        about={about}
        params={params}
        setParams={setParams}
      />
      <EditPopup
        active={popupActive}
        setActive={setPopupActive}
        setName={setName}
        setAbout={setAbout}
        // setParams={setParams}
      />
    </header>
  );
};

export default Header;
