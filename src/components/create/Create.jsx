import { useState } from 'react';
import styles from './Create.module.css';
import { useNavigate } from 'react-router-dom';

const Create = ({ setValues }) => {
  const [nameValue, setNameValue] = useState('');
  const [aboutValue, setAboutValue] = useState('');
  const navigate = useNavigate();

  const submit = event => {
    event.preventDefault();
    setValues({
      inputName: nameValue,
      inputAbout: aboutValue
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
