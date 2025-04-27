import styles from "./Notification.module.css";

const Notification = ({ children }) => {
  return (
    <div className={styles.notification}>
      <p className={styles.message}>{children}</p>
    </div>
  );
};

export default Notification;
