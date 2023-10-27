import React from 'react';
import defaultAvatar from '../../../../images/characters/character12.png';
import styles from './Avatar.module.css';

const Avatar = () => {
  return <img src={defaultAvatar} className={styles.avatar} alt="Изображение персонажа" />;
};

export default Avatar;
