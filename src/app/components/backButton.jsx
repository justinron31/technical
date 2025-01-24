"use client";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function backButton() {
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (
    <div>
      <div className={styles.a1ButtonContainer}>
        <button className={styles.a1BackButton} onClick={handleBackClick}>
          <FiArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}
