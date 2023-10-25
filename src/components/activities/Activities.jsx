import { useState } from 'react';
import styles from './Activities.module.css';

const Activities = ({ character }) => {
  const [attackState, setAttackState] = useState(character.skills.attack);
  const [archeryState, setArcheryState] = useState(character.skills.archery);
  const [stealthState, setStealthState] = useState(character.skills.stealth);
  const [learningState, setLearningState] = useState(character.skills.learning);
  const [survivalState, setSurvivalState] = useState(character.skills.survival);
  const [medicineState, setMedicineState] = useState(character.skills.medicine);
  const [intimidationState, setIntimidationState] = useState(character.skills.intimidation);
  const [insightState, setInsightState] = useState(character.skills.insight);
  const [appearancehState, setAppearanceState] = useState(character.skills.appearance);
  const [manipulationState, setManipulationState] = useState(character.skills.manipulation);

  // const handleTrain = event => {
  //   const newSkills = { ...character.skills };
  //   if (newSkills[event.target.id] < 5) {
  //     setAttackState(attackState + 1);
  //   }
  // };

  const gradeSkiks = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер'];
  return (
    <div className={styles.activitiesContainer}>
      <h2 className={styles.activitiesTitle}>Тренировки</h2>
      <div className={styles.activitiesWrapper}>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Атака</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[attackState]}</h4>
          <button id="attack" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стрельба из лука</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.archery]}</h4>
          <button id="archery" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стелс</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.stealth]}</h4>
          <button id="stealth" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Обучаемость</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.learning]}</h4>
          <button id="learning" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Выживание</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.survival]}</h4>
          <button id="survival" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Медицина</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.medicine]}</h4>
          <button id="medicine" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Запугивание</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.intimidation]}</h4>
          <button id="intimidation" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Проницательность</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.insight]}</h4>
          <button id="insight" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Внешний вид</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.appearance]}</h4>
          <button id="appearance" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Манипулирование</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[character.skills.manipulation]}</h4>
          <button id="manipulation" className={styles.improveButton} type="button">
            Тренировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
