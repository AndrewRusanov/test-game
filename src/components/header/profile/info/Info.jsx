import React from 'react';
import styles from './Info.module.css';

const Info = ({ name, about }) => {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.characterName}>{name}</h1>
      <p className={styles.characterDescription}>{about}</p>
    </div>
  );
};

export default Info;
