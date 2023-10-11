import React from 'react';
import styles from './Profile.module.css';
import Info from './info/Info';
import Stats from './stats/Stats';
import Avatar from './avatar/Avatar';
import Actions from './actions/Actions';

const Profile = ({ handleSetActive, name, about }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <Avatar />
        <Info name={name} about={about} />
        <Actions
          handleSetActive={() => {
            handleSetActive(true);
          }}
        />
      </div>
      <Stats />
    </div>
  );
};

export default Profile;
