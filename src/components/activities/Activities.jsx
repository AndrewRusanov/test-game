import React from 'react';
import styles from './Activities.module.css';
import Activity from './activity/Activity';

const activityArray = [
  'Атака',
  'Стрельба из лука',
  'Стелс',
  'Обучаемость',
  'Выживание',
  'Медицина',
  'Запугивание',
  'Проницательность',
  'Внешний вид',
  'Манипулирование'
];

const Activities = () => {
  return (
    <div className={styles.activitiesContainer}>
      <h2 className={styles.activitiesTitle}>Тренировки</h2>
      <div className={styles.activitiesWrapper}>
        {activityArray.map(activity => {
          return <Activity activityName={activity} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
