import React from 'react';
import styles from './Profile.module.css';
import Info from './info/Info';
import Stats from './stats/Stats';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <Info />
      <Stats />
    </div>
  );
};

export default Profile;
