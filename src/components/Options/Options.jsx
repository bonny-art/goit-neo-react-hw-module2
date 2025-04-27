import styles from "./Options.module.css";

const Options = ({ options, handleClick, hasFeedback }) => {
  return (
    <div className={styles.options}>
      {Object.keys(options).map((option) => (
        <button key={option} onClick={handleClick(option)}>
          {option}
        </button>
      ))}
      {hasFeedback && (
        <button className={styles.reset} onClick={handleClick()}>
          reset
        </button>
      )}
    </div>
  );
};

export default Options;
