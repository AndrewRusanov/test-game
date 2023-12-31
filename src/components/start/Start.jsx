import styles from './Start.module.css';
import { NavLink } from 'react-router-dom';

const Start = () => {
  return (
    <div className={styles.startWrapper}>
      <div className={styles.startContainer}>
        <h1 className={styles.startTitle}>Добро пожаловать!</h1>
        <NavLink to="create" className={styles.startButtonContainer}>
          <button className={styles.startButton}>
            <p className={styles.startButtonText}>Создать персонажа</p>
          </button>
        </NavLink>

        <NavLink to="import" className={styles.startButtonContainer}>
          <button className={styles.startButton}>
            <p className={styles.startButtonText}>Импортировать персонажа</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Start;
