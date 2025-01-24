"use client";

// Importing the left arrow icon from react-icons
import BackButton from "../../components/backButton";

import styles from "../../page.module.css";

export default function Activity1() {
  return (
    <>
      <div>
        <div className={styles.a1Container}>
          <div className={styles.a1ButtonContainer}>
            <BackButton />
          </div>

          <h1>Hello World</h1>
        </div>
      </div>
    </>
  );
}
