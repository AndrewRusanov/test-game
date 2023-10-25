import styles from './Stats.module.css';

const Stats = () => {
  return (
    <div className={styles.statsWrapper}>
      <h2 className={styles.statsTitle}>Умения</h2>
      <div className={styles.statsContainer}>
        <p className={styles.statsValue}>Сила: </p>
        <p className={styles.statsValue}>Интеллект: </p>
        <p className={styles.statsValue}>Ловкость: </p>
        <p className={styles.statsValue}>Харизма: </p>
        <p className={styles.statsValue}>Уклонение: </p>
        <p className={styles.statsValue}>Энергичность: </p>
        <p className={styles.statsValue}>Жизненная сила: </p>
      </div>
    </div>
  );
};

export default Stats;
