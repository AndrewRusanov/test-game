import styles from './Profile.module.css';
import Info from './info/Info';
import Stats from './stats/Stats';
import Avatar from './avatar/Avatar';
import Actions from './actions/Actions';

const Profile = ({
  handleSetActive,
  name,
  about,
  params,
  setParams,
  skills,
  setSkills,
  setValues
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <Avatar />
        <Info name={name} about={about} />
        <Actions
          handleSetActive={() => {
            handleSetActive(true);
          }}
          name={name}
          about={about}
          params={params}
          setParams={setParams}
          skills={skills}
          setSkills={setSkills}
          setValues={setValues}
        />
      </div>
      <Stats params={params} />
    </div>
  );
};

export default Profile;
