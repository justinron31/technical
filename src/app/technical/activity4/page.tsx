"use client";

import { useState } from "react";
import styles from "../../page.module.css";
import BackButton from "../../components/backButton";

// Optimized random color generator
const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export default function Activity4() {
  const [buttonSize, setButtonSize] = useState(1);
  const [buttonColor, setButtonColor] = useState("#000000");

  const handleClick = () => {
    setButtonSize((prevSize) => prevSize * 2); // Use previous size for more efficient update
    setButtonColor(getRandomColor()); // Generate and set random color
  };

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.buttonContainer}>
        <button
          onClick={handleClick}
          className={styles.growButton}
          style={{
            transform: `scale(${buttonSize})`,
            backgroundColor: buttonColor,
          }}
        >
          GROW
        </button>
      </div>
    </div>
  );
}
