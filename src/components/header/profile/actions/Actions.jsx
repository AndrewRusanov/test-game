import React, { useState } from 'react';
import styles from './Actions.module.css';

const Actions = ({
  handleSetActive,
  name,
  about,
  params,
  setParams,
  skill,
  setSkills,
  setValues
}) => {
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
      <label className={styles.actionsBtnLink} htmlFor="characterLoader">
        Импортировать
      </label>
      <input
        className={styles.importInput}
        id="characterLoader"
        name="characterLoader"
        type="file"
        onChange={event => {
          event.preventDefault();
          const file = event.target.files[0];
          let reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function () {
            let character = JSON.parse(reader.result);
            setValues({
              inputName: character.name,
              inputAbout: character.about
            });
            setParams({
              strength: character.parametres.strength,
              agility: character.parametres.agility,
              intelligence: character.parametres.intelligence,
              charisma: character.parametres.charisma,
              vitality: character.parametres.vitality,
              evasion: character.parametres.evasion,
              vigor: character.parametres.vigor
            });
            setSkills({
              attack: character.skills.attack,
              archery: character.skills.archery,
              stealth: character.skills.stealth,
              learning: character.skills.learning,
              survival: character.skills.survival,
              medicine: character.skills.medicine,
              intimidation: character.skills.intimidation,
              insight: character.skills.insight,
              appearance: character.skills.appearance,
              manipulation: character.skills.manipulation
            });
          };

          reader.onerror = function () {
            console.log(`Ошибка загрузки файла: ${reader.error}`);
          };
        }}
      />

      <a
        href={urlState}
        className={styles.actionsBtnLink}
        onClick={() => {
          const newCharacter = {
            name: name,
            about: about,
            parametres: params,
            skills: skill
          };
          setObjectState(JSON.stringify(newCharacter));
          let blob = new Blob([objectState], { type: 'application/json' });
          setUrlState(URL.createObjectURL(blob));
        }}
        download
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
