/** @format */

import { useState } from "react";
import BoxComponent from "./box";
import styles from "./component.module.css";
import GameButton from "./gameButton";
import generateWord, { hasWord, isInArray, shuffleWord } from "../util/words";
import { toast, ToastContainer } from "react-toastify";
import Timer from "./Timer";

export default function GameScreen() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);
  const [clear, setClear] = useState(true);
  const [listOfLetters, setListOfLetters] = useState([]);
  const [listOfWords, setListOfWords] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 19) {
          setMinutes(minutes + 1);
          setSeconds(0);
          clearInterval();
        }
        return seconds + 1;
      });
    }, 1000);
  };

  function handleTest() {
    if (hasWord(text)) {
      if (!isInArray(text, listOfWords)) {
        setListOfWords([...listOfWords, text]);
        toast.success("Good Job ✅");
        handleClear();
        setCounter((prevV) => {
          return prevV + 1;
        });
      } else {
        toast.error("Word already Exist");
      }
    } else {
      toast.error("Try Again ");
    }
  }
  const letterComponents = listOfLetters.map((letter, index) => (
    <GameButton key={index} showText={setText} display={letter.toUpperCase()} />
  ));

  function handleClear() {
    setText("");
    // const w = shuffleWord(listOfLetters.join(""));
    // setListOfLetters([...w]);
    setClear(!clear);
  }

  const wordComponents = listOfWords.map((word, index) => (
    <span key={index} className={styles.word}>
      {word}
    </span>
  ));

  return (
    <div className={styles.row}>
      <div className={styles.wordList}>{wordComponents}</div>
      <div className={styles.gameScreen}>
        <ToastContainer />
        <div className={styles.topRowLayout}>
          <div className={styles.left}>
            <BoxComponent display={`Score ---  ${counter}`} />
          </div>
          <div className={styles.center}>
            <BoxComponent
              display={`Timer: ${minutes < 10 ? "0" + minutes : minutes}:${
                seconds < 10 ? "0" + seconds : seconds
              }`}
            />
          </div>
        </div>

        <div className={styles.spacing + " " + styles.bigText}>
          <BoxComponent display={text} width="50%" />
        </div>
        <div className={styles.spacing}>
          <BoxComponent width="90%">
            {clear ? letterComponents : <div>{letterComponents}</div>}
          </BoxComponent>
          <button onClick={handleTest} className={styles.box}>
            Summit Answer
          </button>

          <button className={styles.box} onClick={handleClear}>
            Clear
          </button>

          <button
            onClick={() => {
              const newWord = generateWord(4);
              setListOfLetters([...newWord.shuffle_word]);
              startTimer();
            }}
            className={styles.box}
          >
            Generate Word
          </button>
        </div>
      </div>
    </div>
  );
}
