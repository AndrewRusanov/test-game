import React from 'react';
import styles from './Tag.module.css';

//  Цвета:
// 1.	#8689AC
// 2.	#587099
// 3.	#3F5576
// 4.	#2F3148
// 5.	#101116

const Tag = props => {
  console.log('lalala', props);
  return <p className={styles.statsValue}>{props.statValue}</p>;
};

export default Tag;
