import React from 'react';
import styles from './Actions.module.css';

const Actions = ({ handleSetActive, params, setParams }) => {
  return (
    <div className={styles.actionsBtnContainer}>
      <button
        className={styles.actionsBtn}
        onClick={() => {
          handleSetActive(true);
        }}
      >
        <p className={styles.actionsBtnText}>Редактировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Импортировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Экспортировать</p>
      </button>
      <button
        className={styles.actionsBtn}
        onClick={() => {
          if (params.vitality > 0) {
            const getDamage = params.vitality - 1;
            setParams({
              strength: params.strength,
              agility: params.agility,
              intelligence: params.intelligence,
              charisma: params.charisma,
              vitality: getDamage,
              evasion: params.evasion,
              vigor: params.vigor
            });
          }
        }}
      >
        <p className={styles.actionsBtnText}>Ударить персонажа</p>
      </button>
    </div>
  );
};

export default Actions;
