import styles from "./Feedback.module.css";

const Feedback = ({ options, total, positive }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.options}>
        {Object.keys(options).map((option) => (
          <p className={styles.caption} key={option}>
            {option}: <span className={styles.value}>{options[option]}</span>
          </p>
        ))}
      </div>

      <div className={styles.stats}>
        <p className={styles.caption}>
          Total: <span className={styles.value}>{total}</span>
        </p>
        <p className={styles.caption}>
          Positive: <span className={styles.value}>{positive}%</span>
        </p>
      </div>
    </div>
  );
};

export default Feedback;
