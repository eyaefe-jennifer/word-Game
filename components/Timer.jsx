/** @format */
import styles from "./component.module.css";

const Timer = (props) => {
  const { width, seconds } = props;
  return (
    <div className={styles.box} style={{ width: width }}>
      <p>Timer: {seconds === 0 ? "Time up" : seconds}</p>
    </div>
  );
};
export default Timer;
