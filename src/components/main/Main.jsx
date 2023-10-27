import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';
import { useState } from 'react';

const Main = ({ name, about, setValues, params, setParams, skills, setSkills }) => {
  return (
    <div className={styles.mainWrapper}>
      <Header
        name={name}
        about={about}
        setValues={setValues}
        params={params}
        setParams={setParams}
        skills={skills}
        setSkills={setSkills}
      />
      <Activities params={params} setParams={setParams} skills={skills} setSkills={setSkills} />
    </div>
  );
};

export default Main;
