import { useState } from 'react';
import styles from './Activities.module.css';

const Activities = ({ params, skills, setSkills }) => {
  const [attackState, setAttackState] = useState(skills.attack);
  const [archeryState, setArcheryState] = useState(skills.archery);
  const [stealthState, setStealthState] = useState(skills.stealth);
  const [learningState, setLearningState] = useState(skills.learning);
  const [survivalState, setSurvivalState] = useState(skills.survival);
  const [medicineState, setMedicineState] = useState(skills.medicine);
  const [intimidationState, setIntimidationState] = useState(skills.intimidation);
  const [insightState, setInsightState] = useState(skills.insight);
  const [appearanceState, setAppearanceState] = useState(skills.appearance);
  const [manipulationState, setManipulationState] = useState(skills.manipulation);

  const gradeSkiks = ['Нетренированный', 'Новичок', 'Ученик', 'Адепт', 'Эксперт', 'Мастер'];

  const setNewSkills = () => {
    setSkills({
      attack: attackState,
      archery: archeryState,
      stealth: stealthState,
      learning: learningState,
      survival: survivalState,
      medicine: medicineState,
      intimidation: intimidationState,
      insight: insightState,
      appearance: appearanceState,
      manipulation: manipulationState
    });
  };

  return (
    <section
      className={styles.activitiesContainer}
      onClick={() => {
        setNewSkills();
      }}
    >
      <h2 className={styles.activitiesTitle}>Тренировки</h2>
      <div className={styles.activitiesWrapper}>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Атака</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[attackState]}</h4>
          <button
            id="attack"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (attackState < 5 && attackState < params.strength) {
                setAttackState(attackState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стрельба из лука</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[archeryState]}</h4>
          <button
            id="archery"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (archeryState < 5 && archeryState < params.agility) {
                setArcheryState(archeryState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Стелс</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[stealthState]}</h4>
          <button
            id="stealth"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (stealthState < 5 && stealthState < params.agility) {
                setStealthState(stealthState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Обучаемость</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[learningState]}</h4>
          <button
            id="learning"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (learningState < 5 && learningState < params.intelligence) {
                setLearningState(learningState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Выживание</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[survivalState]}</h4>
          <button
            id="survival"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (survivalState < 5 && survivalState < params.intelligence) {
                setSurvivalState(survivalState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Медицина</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[medicineState]}</h4>
          <button
            id="medicine"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (medicineState < 5 && medicineState < params.intelligence) {
                setMedicineState(medicineState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Запугивание</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[intimidationState]}</h4>
          <button
            id="intimidation"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (intimidationState < 5 && intimidationState < params.charisma) {
                setIntimidationState(intimidationState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Проницательность</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[insightState]}</h4>
          <button
            id="insight"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (insightState < 5 && insightState < params.charisma) {
                setInsightState(insightState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Внешний вид</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[appearanceState]}</h4>
          <button
            id="appearance"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (appearanceState < 5 && appearanceState < params.charisma) {
                setAppearanceState(appearanceState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
        <div className={styles.activityWrapper}>
          <h3 className={styles.activityTitle}>Манипулирование</h3>
          <h4 className={styles.currentLevel}>{gradeSkiks[manipulationState]}</h4>
          <button
            id="manipulation"
            className={styles.improveButton}
            type="button"
            onClick={() => {
              if (manipulationState < 5 && manipulationState < params.charisma) {
                setManipulationState(manipulationState + 1);
              }
            }}
          >
            Тренировать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
