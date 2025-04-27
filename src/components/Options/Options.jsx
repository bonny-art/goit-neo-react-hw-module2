import styles from "./Options.module.css";

const Options = ({ options, handleClick }) => {
  return (
    <div className={styles.options}>
      {Object.keys(options).map((option) => (
        <button key={option} onClick={handleClick(option)}>
          {option}
        </button>
      ))}
      <button className={styles.reset} onClick={handleClick()}>
        reset
      </button>
    </div>
  );
};

export default Options;
