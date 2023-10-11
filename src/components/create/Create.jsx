import React, { useState } from 'react';
import styles from './Create.module.css';
import { NavLink } from 'react-router-dom';

const Create = () => {
  // Состояния для инпутов
  const [nameInputValue, setNameInputValue] = useState('');
  const [aboutInputValue, setAboutInputValue] = useState('');

  //   функция для сбора данных с формы
  const getInputValues = () => {
    const formData = {};
    const inputList = document.querySelectorAll(`.${styles.createInput}`);
    inputList.forEach(input => {
      formData[input.name] = input.value;
    });
    return formData;
  };

  //Функция для подстановки новых данных (из инпута в профиль)
  const setInputValues = ({ inputName, inputAbout }) => {};

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
              <button type="submit" className={styles.createButton}>
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
