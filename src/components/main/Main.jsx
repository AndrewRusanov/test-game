import React from 'react';
import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <Activities />
    </div>
  );
};

export default Main;
