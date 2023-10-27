import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';
import { skills } from '../../utils/constants.js';
import { useState } from 'react';

const Main = ({ name, about, setValues, params, setParams }) => {
  const [skillsState, setSkillsState] = useState(skills);

  return (
    <div className={styles.mainWrapper}>
      <Header
        name={name}
        about={about}
        setValues={setValues}
        params={params}
        setParams={setParams}
        skills={skillsState}
      />
      <Activities params={params} skills={skillsState} setSkills={setSkillsState} />
    </div>
  );
};

export default Main;
