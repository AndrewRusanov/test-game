import styles from './Stats.module.css';

const Stats = ({ character }) => {
  return (
    <div className={styles.statsWrapper}>
      <h2 className={styles.statsTitle}>Умения</h2>
      <div className={styles.statsContainer}>
        <p className={styles.statsValue}>Сила: {character.strength}</p>
        <p className={styles.statsValue}>Интеллект: {character.intelligence}</p>
        <p className={styles.statsValue}>Ловкость: {character.agility}</p>
        <p className={styles.statsValue}>Харизма: {character.charisma}</p>
        <p className={styles.statsValue}>Уклонение: {character.evasion}</p>
        <p className={styles.statsValue}>Энергичность: {character.vigor}</p>
        <p className={styles.statsValue}>Жизненная сила: {character.vitality}</p>
      </div>
    </div>
  );
};

export default Stats;
