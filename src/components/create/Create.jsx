import { useState } from 'react';
import styles from './Create.module.css';
import { useNavigate } from 'react-router-dom';

const Create = ({ setValues, params, setParams }) => {
  const [nameValue, setNameValue] = useState('');
  const [aboutValue, setAboutValue] = useState('');
  const [strength, setStrength] = useState(params.strength);
  const [agility, setAgility] = useState(params.agility);
  const [intelligence, setIntelligence] = useState(params.intelligence);
  const [charisma, setCharisma] = useState(params.charisma);
  const navigate = useNavigate();

  const submit = event => {
    event.preventDefault();
    setValues({
      inputName: nameValue,
      inputAbout: aboutValue
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
    navigate('/main');
  };

  return (
    <div className={styles.createWrapper}>
      <div className={styles.createWrapper}>
        <div className={styles.popupContainer}>
          <h1 className={styles.createTitle}>Создайте персонажа</h1>
          <form className={styles.createForm} onSubmit={submit}>
            <input
              className={styles.createInput}
              name="inputName"
              id="inputName"
              type="text"
              placeholder="Имя персонажа"
              value={nameValue}
              onChange={event => {
                setNameValue(event.target.value);
              }}
            />
            <input
              className={styles.createInput}
              name="inputAbout"
              id="inputAbout"
              type="text"
              placeholder="Описание персонажа"
              value={aboutValue}
              onChange={event => {
                setAboutValue(event.target.value);
              }}
            />
            <h2 className={styles.createSubtitle}>Задайте базовые параметры (от 0 до 5)</h2>
            <div className={styles.createParamsContainer}>
              <div className={styles.createParamsWrapper}>
                <label className={styles.createParamsLabel} htmlFor="strength">
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
              <div className={styles.createParamsWrapper}>
                <label className={styles.createParamsLabel} htmlFor="agility">
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
              <div className={styles.createParamsWrapper}>
                <label className={styles.createParamsLabel} htmlFor="intelligence">
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
              <div className={styles.createParamsWrapper}>
                <label className={styles.createParamsLabel} htmlFor="charisma">
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
            <button type="submit" className={styles.createButton}>
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
