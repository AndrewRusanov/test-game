import React, { useState } from 'react';
import styles from './Actions.module.css';

const Actions = ({ handleSetActive, name, about, params, setParams, skills }) => {
  const [urlState, setUrlState] = useState('');
  const [objectState, setObjectState] = useState('');

  return (
    <div className={styles.actionsBtnContainer}>
      <button
        className={styles.actionsBtn}
        onClick={() => {
          handleSetActive(true);
        }}
      >
        <p className={styles.actionsBtnText}>Редактировать</p>
      </button>
      <button className={styles.actionsBtn}>
        <p className={styles.actionsBtnText}>Импортировать</p>
      </button>

      <a
        href={urlState}
        download
        className={styles.actionsBtnLink}
        onClick={() => {
          const newCharacter = {
            name: name,
            about: about,
            parametres: params,
            skills: skills
          };
          setObjectState(JSON.stringify(newCharacter));
          let blob = new Blob([objectState], { type: 'application/json' });
          setUrlState(URL.createObjectURL(blob));
        }}
      >
        Экспортировать
      </a>
      <button
        className={styles.actionsBtn}
        onClick={() => {
          if (params.vitality > 0) {
            const getDamage = params.vitality - 1;
            setParams({
              strength: params.strength,
              agility: params.agility,
              intelligence: params.intelligence,
              charisma: params.charisma,
              vitality: getDamage,
              evasion: params.evasion,
              vigor: params.vigor
            });
          }
        }}
      >
        <p className={styles.actionsBtnText}>Ударить персонажа</p>
      </button>
    </div>
  );
};

export default Actions;
