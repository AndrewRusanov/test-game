import React from 'react';
import styles from './EdditPopup.module.css';
import closeBtnImage from '../../../images/closeIcon.png';
import classNames from 'classnames';

const EditPopup = ({ active, setActive }) => {
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
        <form className={styles.popupFrom} noValidate>
          <h2 className={styles.popupTitle}>Редактировать персонажа</h2>
          <input
            className={styles.popupInput}
            name="inputName"
            type="text"
            placeholder="Имя персонажа"
            minLength="2"
            maxLength="40"
            required
          />
          <span className={styles.popupError} id="inputName-error"></span>
          <input
            className={styles.popupInput}
            name="inputAbout"
            type="text"
            placeholder="Описание персонажа"
            minLength="2"
            maxLength="200"
            required
          />
          <span className={styles.popupError} id="inputAbout-error"></span>
          <button
            type="submit"
            className={styles.popupButton}
            onClick={event => {
              event.preventDefault();
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
