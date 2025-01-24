"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "../../page.module.css";
import BackButton from "../../components/backButton";

export default function Activity2() {
  const [counter, setCounter] = useState<number>(0);

  // Increment, decrement, and reset functions
  const changeCounter = (value: number) => setCounter(counter + value);

  // Check if the counter is even
  const isEven = counter % 2 === 0;

  return (
    <div className={styles.container}>
      <BackButton />

      <div className={styles.counterContainer}>
        <p>Counter</p>
        <h1>{counter}</h1>
        <p>{isEven ? "Even" : "Odd"}</p>

        <div className={styles.counterBlock}>
          <button
            onClick={() => changeCounter(-1)}
            className={styles.iconButton}
          >
            <FiMinus size={24} />
          </button>
          <button
            onClick={() => changeCounter(1)}
            className={styles.iconButton}
          >
            <FiPlus size={24} />
          </button>
        </div>

        <button
          onClick={() => changeCounter(-counter)}
          className={styles.iconButton}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
