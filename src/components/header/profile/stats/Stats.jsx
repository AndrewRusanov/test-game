import React from 'react';
import styles from './Stats.module.css';
import Tag from './tag/Tag';

const statsArray = [
  'Сила',
  'Интеллект',
  'Ловоксть',
  'Харизма',
  'Жизненная сила',
  'Уклонение',
  'Энергичность'
];

const Stats = () => {
  return (
    <div className={styles.statsWrapper}>
      <h2 className={styles.statsTitle}>Умения</h2>
      <div className={styles.statsContainer}>
        {statsArray.map(element => {
          return <Tag statValue={`${element}: `} />;
        })}
      </div>
    </div>
  );
};

export default Stats;
