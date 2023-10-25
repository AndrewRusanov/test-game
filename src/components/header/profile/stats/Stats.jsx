import styles from './Stats.module.css';

const Stats = ({ params }) => {
  return (
    <div className={styles.statsWrapper}>
      <h2 className={styles.statsTitle}>Умения</h2>
      <div className={styles.statsContainer}>
        <p className={styles.statsValue}>Сила: {params.strength}</p>
        <p className={styles.statsValue}>Интеллект: {params.intelligence}</p>
        <p className={styles.statsValue}>Ловкость: {params.agility}</p>
        <p className={styles.statsValue}>Харизма: {params.charisma}</p>
        <p className={styles.statsValue}>Уклонение: {params.evasion}</p>
        <p className={styles.statsValue}>Энергичность: {params.vigor}</p>
        <p className={styles.statsValue}>Жизненная сила: {params.vitality}</p>
      </div>
    </div>
  );
};

export default Stats;
