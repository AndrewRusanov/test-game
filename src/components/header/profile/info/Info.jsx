import React from 'react';
import styles from './Info.module.css';

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.characterName}>Имя персонажа</h1>
      <h2 className={styles.characterDescription}>Описание персонажа</h2>
    </div>
  );
};

export default Info;
