import React from 'react';
import styles from './Profile.module.css';
import Info from './info/Info';
import Stats from './stats/Stats';
import Avatar from './avatar/Avatar';
import Actions from './actions/Actions';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <Avatar />
        <Info />
        <Actions />
      </div>
      <Stats />
    </div>
  );
};

export default Profile;
