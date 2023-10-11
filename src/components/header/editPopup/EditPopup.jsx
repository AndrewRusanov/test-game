import React from 'react';
import styles from './EdditPopup.module.css';
import closeBtnImage from '../../../images/closeIcon.png';

const EditPopup = () => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <button type="button" className={styles.closeBtn}>
          <img src={closeBtnImage} className={styles.closeIcon} alt="Закрыть окно" />
        </button>
        <form className={styles.popupFrom} noValidate>
          <h2 className={styles.popupTitle}>Редактировать персонажа</h2>
          <input
            className={styles.popupInput}
            name="inputName"
            type="text"
            placeholder="Имя персонажа"
            minlength="2"
            maxlength="40"
            required
          />
          <span className={styles.popupError} id="inputName-error"></span>
          <input
            className={styles.popupInput}
            name="inputAbout"
            type="text"
            placeholder="Описание персонажа"
            minlength="2"
            maxlength="200"
            required
          />
          <span className={styles.popupError} id="inputAbout-error"></span>
          <button type="submit" className={styles.popupButton}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
