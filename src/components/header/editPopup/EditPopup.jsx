import React, { useState } from 'react';
import styles from './EdditPopup.module.css';
import closeBtnImage from '../../../images/closeIcon.png';
import classNames from 'classnames';

const EditPopup = ({ active, setActive, setValues }) => {
  // состояния для инпутов
  const [nameInputValue, setNameInputValue] = useState('');
  const [aboutInputValue, setAboutInputValue] = useState('');

  // Функция для сбора данных с формы
  const getInputValues = () => {
    const formData = {};
    const inputList = document.querySelectorAll(`.${styles.popupInput}`);
    inputList.forEach(input => {
      formData[input.name] = input.value;
    });
    console.log(formData);
    return formData;
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
        <form
          className={styles.popupForm}
          noValidate
          onSubmit={event => {
            event.preventDefault();
            setValues(getInputValues());
          }}
        >
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
          <span className={styles.popupError} id="inputName-error"></span>
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
          <span className={styles.popupError} id="inputAbout-error"></span>
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
