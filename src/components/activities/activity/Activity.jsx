import React from 'react';
import styles from './Activity.module.css';

const Activity = props => {
  return (
    <div className={styles.activityWrapper}>
      <h3 className={styles.activityTitle}>{props.activityName}</h3>
      <h4 className={styles.currentLevel}>Текущий уровень</h4>
      <button className={styles.improveButton} type="button">
        Тренировать
      </button>
    </div>
  );
};

export default Activity;
