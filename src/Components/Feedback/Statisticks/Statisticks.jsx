import styles from './Statistics.module.scss';

const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
  return (
    <div className={styles.statistics}>
      <p className={styles.good}>Good: {good}</p>
      <p className={styles.neutral}>Neutral: {neutral}</p>
      <p className={styles.bad}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positive}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
