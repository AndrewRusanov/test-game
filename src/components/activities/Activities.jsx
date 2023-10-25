import styles from './Activities.module.css';

const Activities = ({ character }) => {
  const gradeSkiks = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер'];
  return (
    <div className={styles.activitiesContainer}>
      <h2 className={styles.activitiesTitle}>Тренировки</h2>
      <div className={styles.activitiesWrapper}>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Атака</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стрельба из лука</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стелс</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Обучаемость</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Выживание</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Медицина</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Запугивание</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Проницательность</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Внешний вид</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Манипулирование</h3>
          <h4 className={styles.currentLevel}>лох</h4>
          <button className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
