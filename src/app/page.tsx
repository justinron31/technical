"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/technical/activity1");
  };

  const handleClick1 = () => {
    router.push("/technical/activity2");
  };

  const handleClick2 = () => {
    router.push("/technical/activity3");
  };

  const handleClick3 = () => {
    router.push("/technical/activity4");
  };

  const handleClick4 = () => {
    router.push("/technical/activity5");
  };

  const handleClick5 = () => {
    router.push("/technical/activity6");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.heading}>Justin Ron Galang</h1>
          <p>Technical Assessment</p>
        </div>

        <div className={styles.activityContainer}>
          {/* activity blocks */}
          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 1</h2>
                <p>Center “Hello World” in the middle of the browser window.</p>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick}>
                View page
              </button>
            </div>
          </div>

          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 2</h2>
                <p>Create a counter</p>
                <li>Increment, decrement</li>
                <li>
                  Add an element that states whether a number is odd or even.
                </li>
                <li>Add a reset button that returns the counter to 0.</li>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick1}>
                View page
              </button>
            </div>
          </div>

          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 3</h2>
                <p>Create a simple calculator that can only add 2 numbers:</p>
                <li>First Input element</li>
                <li>Second Input element</li>
                <li>
                  Sum element (No equals button, the sum should be re-rendered
                  as you type values into either of the two input elements
                  above)
                </li>
                <li>Add a reset button that sets the inputs to 0.</li>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick2}>
                View page
              </button>
            </div>
          </div>

          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 4</h2>
                <p>
                  Create a centered button, with the text “GROW”, that doubles
                  in size on click.
                </p>
                <li>
                  Modify the button to also change to a random color for every
                  click.
                </li>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick3}>
                View page
              </button>
            </div>
          </div>

          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 5</h2>
                <li>Check and uncheck list item.</li>
                <li>Add or remove list item from list.</li>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick4}>
                View page
              </button>
            </div>
          </div>

          <div className={styles.activityBlock}>
            <div className={styles.activityHeader}>
              <div className={styles.activityTitle}>
                <h2>Activity 6:</h2>
                <p>
                  Create a “CardList” that displays API data below as “Cards” in
                  the following format: Each “Card” should contain at least an
                  avatar, the avatar’s name, and a description. How it looks
                  depends entirely up to you.
                </p>
                <li>https://random-data-api.com</li>
                <li>https://pokeapi.co</li>
                <li>
                  Your choice of API that at least provides an avatar, some
                  name, and some description.
                </li>
                <li>
                  Use CSS Flexbox. We will resize your browser window and your
                  project should adapt to the browser window.
                </li>
              </div>
            </div>
            <div className={styles.activityContent}>
              <button className={styles.activityButton} onClick={handleClick5}>
                View page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
