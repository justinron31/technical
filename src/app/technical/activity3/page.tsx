"use client";

import { useState } from "react";
import styles from "../../page.module.css";
import BackButton from "../../components/backButton";

export default function Activity3() {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");

  // Calculate the sum
  const sum = (parseFloat(firstNumber) || 0) + (parseFloat(secondNumber) || 0); // handle NaN with fallback to 0

  // Reset function to set both inputs to ""
  const resetInputs = () => {
    setFirstNumber("");
    setSecondNumber("");
  };

  // Handle input change and only accept valid characters (numbers, decimal, and negative sign)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;

    if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className={styles.container}>
      <BackButton />

      <div className={styles.counterContainer}>
        <h2>Simple Calculator</h2>

        {/* First Input Section */}
        <div className={styles.inputContainer}>
          <label htmlFor="firstNumber" className={styles.inputLabel}>
            First Number
          </label>
          <input
            id="firstNumber"
            type="text"
            value={firstNumber}
            onChange={(e) => handleInputChange(e, setFirstNumber)}
            className={styles.input}
            placeholder="Enter a number"
          />
        </div>

        {/* Second Input Section */}
        <div className={styles.inputContainer}>
          <label htmlFor="secondNumber" className={styles.inputLabel}>
            Second Number
          </label>
          <input
            id="secondNumber"
            type="text"
            value={secondNumber}
            onChange={(e) => handleInputChange(e, setSecondNumber)}
            className={styles.input}
            placeholder="Enter a number"
          />
        </div>

        <div className={styles.result}>
          <p>Sum: {sum}</p>
        </div>

        <button onClick={resetInputs} className={styles.iconButton}>
          Reset
        </button>
      </div>
    </div>
  );
}
