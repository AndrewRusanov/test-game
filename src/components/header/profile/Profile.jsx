import styles from './Profile.module.css';
import Info from './info/Info';
import Stats from './stats/Stats';
import Avatar from './avatar/Avatar';
import Actions from './actions/Actions';

const Profile = ({ handleSetActive, name, about, params }) => {
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
      <Stats params={params} />
    </div>
  );
};

export default Profile;
