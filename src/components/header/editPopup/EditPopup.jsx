import React, { useState } from 'react';
import styles from './EdditPopup.module.css';
import closeBtnImage from '../../../images/closeIcon.png';
import classNames from 'classnames';

const EditPopup = ({ active, setActive, setValues, params, setParams }) => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [aboutInputValue, setAboutInputValue] = useState('');
  const [strength, setStrength] = useState(params.strength);
  const [agility, setAgility] = useState(params.agility);
  const [intelligence, setIntelligence] = useState(params.intelligence);
  const [charisma, setCharisma] = useState(params.charisma);

  const submit = event => {
    event.preventDefault();
    setValues({
      inputName: nameInputValue,
      inputAbout: aboutInputValue
    });
    setParams({
      strength: strength,
      agility: agility,
      intelligence: intelligence,
      charisma: charisma,
      vitality: 3 + Number(strength),
      evasion: 10 + Number(agility),
      vigor: Number(agility) + Number(intelligence)
    });
  };

  return (
    <div
      className={active ? classNames(styles.popupOverlay, styles.popupActive) : styles.popupOverlay}
      id="popupEdit"
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={styles.popupContainer}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => {
            setActive(false);
          }}
        >
          <img src={closeBtnImage} className={styles.closeIcon} alt="Закрыть окно" />
        </button>
        <form className={styles.popupForm} noValidate onSubmit={submit}>
          <h2 className={styles.popupTitle}>Редактировать персонажа</h2>
          <input
            className={styles.popupInput}
            name="inputName"
            id="inputName"
            type="text"
            placeholder="Имя персонажа"
            minLength="2"
            maxLength="40"
            value={nameInputValue}
            onChange={event => {
              setNameInputValue(event.target.value);
            }}
            required
          />
          <input
            className={styles.popupInput}
            name="inputAbout"
            type="text"
            placeholder="Описание персонажа"
            minLength="2"
            maxLength="300"
            value={aboutInputValue}
            onChange={event => {
              setAboutInputValue(event.target.value);
            }}
            required
          />

          <h2 className={styles.popupSubtitle}>Базовые параметры (от 0 до 5)</h2>
          <div className={styles.popupParamsContainer}>
            <div className={styles.popupParamsWrapper}>
              <label htmlFor="strength" className={styles.createParamsLabel}>
                Сила:{' '}
              </label>
              <input
                className={styles.createParamsInput}
                type="number"
                step={1}
                min={0}
                max={5}
                id="strength"
                name="strength"
                value={strength}
                onChange={event => {
                  setStrength(event.target.value);
                }}
              />
            </div>
            <div className={styles.popupParamsWrapper}>
              <label htmlFor="intelligence" className={styles.createParamsLabel}>
                Интеллект:{' '}
              </label>
              <input
                className={styles.createParamsInput}
                type="number"
                step={1}
                min={0}
                max={5}
                id="intelligence"
                name="intelligence"
                value={intelligence}
                onChange={event => {
                  setIntelligence(event.target.value);
                }}
              />
            </div>
            <div className={styles.popupParamsWrapper}>
              <label htmlFor="agility" className={styles.createParamsLabel}>
                Ловкость:{' '}
              </label>
              <input
                className={styles.createParamsInput}
                type="number"
                step={1}
                min={0}
                max={5}
                id="agility"
                name="agility"
                value={agility}
                onChange={event => {
                  setAgility(event.target.value);
                }}
              />
            </div>
            <div className={styles.popupParamsWrapper}>
              <label htmlFor="charisma" className={styles.createParamsLabel}>
                Харизма:{' '}
              </label>
              <input
                className={styles.createParamsInput}
                type="number"
                step={1}
                min={0}
                max={5}
                id="charisma"
                name="charisma"
                value={charisma}
                onChange={event => {
                  setCharisma(event.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className={styles.popupButton}
            onClick={() => {
              setActive(false);
            }}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
