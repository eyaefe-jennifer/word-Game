import { useState } from "react";
import styles from "./component.module.css";

export default function GameButton({ showText, display }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
    showText((prev) => prev + display);
  }

  return (
    <button
      onClick={handleClick}
      disabled={active}
      className={styles.gameButton}
    >
      {display}
    </button>
  );
}
