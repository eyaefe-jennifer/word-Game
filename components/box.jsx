/** @format */

import styles from "./component.module.css";

export default function BoxComponent(props) {
  const { width } = props;
  return (
    <div className={styles.box} style={{ width: width }}>
      <span>{props.display}</span>
      {props.children}
    </div>
  );
}
