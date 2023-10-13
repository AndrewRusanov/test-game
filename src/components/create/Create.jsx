import React, { useState } from 'react';
import styles from './Create.module.css';
import { NavLink } from 'react-router-dom';

const Create = ({ setInputValues }) => {
  // Состояния для инпутов
  const [nameInputValue, setNameInputValue] = useState('');
  const [aboutInputValue, setAboutInputValue] = useState('');
  console.log('lox', setInputValues);

  const getInputValues = () => {
    const formData = {};
    const inputList = document.querySelectorAll(`.${styles.createInput}`);
    inputList.forEach(input => {
      formData[input.name] = input.value;
    });
    console.log('Дададада', formData);
    return formData;
  };

  return (
    <div className={styles.createWrapper}>
      <div className={styles.createWrapper}>
        <div className={styles.popupContainer}>
          <h1 className={styles.createTitle}>Создайте персонажа</h1>
          <form className={styles.createForm}>
            <input
              className={styles.createInput}
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
            />
            <span className={styles.popupError} id="inputName-error"></span>
            <input
              className={styles.createInput}
              name="inputAbout"
              id="inputAbout"
              type="text"
              placeholder="Описание персонажа"
              minLength="2"
              maxLength="300"
              value={aboutInputValue}
              onChange={event => {
                setAboutInputValue(event.target.value);
              }}
            />
            <span className={styles.popupError} id="inputName-error"></span>
            <h2 className={styles.createSubtitle}>Задайте базовые навыки</h2>
            <NavLink to="/main">
              <button
                type="button"
                className={styles.createButton}
                onClick={() => {
                  console.log('Я нажал сабмит');
                  getInputValues();
                }}
              >
                Создать
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
