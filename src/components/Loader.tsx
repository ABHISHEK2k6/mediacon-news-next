"use client";
import styles from "../styles/Loader.module.css";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoInner}>
          <Image
            src="/assets/Con(Logo).png"
            alt="Mediacon Logo"
            fill
            className={styles.logoImage}
          />
        </div>
        <svg
          className={styles.animatedStroke}
          viewBox="0 0 250 250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="125"
            cy="130"
            r="100"
            className={styles.strokePath}
          />
          
        </svg>
      </div>
    </div>
  );
}
