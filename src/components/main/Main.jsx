import React from 'react';
import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';

const Main = ({
  characterName,
  setCharacterName,
  characterDescription,
  setCharacterDescription
}) => {
  return (
    <div className={styles.mainWrapper}>
      <Header
        name={characterName}
        setName={setCharacterName}
        about={characterDescription}
        setAbout={setCharacterDescription}
      />
      <Activities />
    </div>
  );
};

export default Main;
