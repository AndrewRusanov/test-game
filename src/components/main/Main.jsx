import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';
import { parametrs } from '../../utils/constants.js';
import { skills } from '../../utils/constants.js';
import { useState } from 'react';

const Main = ({ name, setName, about, setAbout }) => {
  const [paramsState, setParamsState] = useState(parametrs);
  const [skillsState, setSkillsState] = useState(skills);

  return (
    <div className={styles.mainWrapper}>
      <Header
        name={name}
        setName={setName}
        about={about}
        setAbout={setAbout}
        params={paramsState}
      />
      <Activities setParams={setParamsState} skills={skillsState} setSkills={setSkillsState} />
    </div>
  );
};

export default Main;
