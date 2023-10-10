import React from 'react';
import styles from './Actions.module.css';

const Actions = () => {
  return (
    <div className={styles.actionsBtnContainer}>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Редактировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Импортировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Экспортировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Ударить персонажа</p>
      </button>
    </div>
  );
};

export default Actions;
