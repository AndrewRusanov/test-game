import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';
import { skills } from '../../utils/constants.js';
import { useState } from 'react';

const Main = ({ name, setName, about, setAbout, params, setParams }) => {
  const [skillsState, setSkillsState] = useState(skills);

  return (
    <div className={styles.mainWrapper}>
      <Header name={name} setName={setName} about={about} setAbout={setAbout} params={params} />
      <Activities
        params={params}
        // setParams={setParams}
        skills={skillsState}
        setSkills={setSkillsState}
      />
    </div>
  );
};

export default Main;
