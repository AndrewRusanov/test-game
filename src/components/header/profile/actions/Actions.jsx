import React from 'react';
import styles from './Actions.module.css';

const Actions = () => {
  return (
    <div className={styles.actionsBtnContainer}>
      <button className={styles.actionsBtn}>Редактировать</button>
      <button className={styles.actionsBtn}>Импортировать</button>
      <button className={styles.actionsBtn}>Экспортировать</button>
    </div>
  );
};

export default Actions;
