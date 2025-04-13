"use client";
import styles from "../styles/Loader.module.css";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoWrapper}>
        <Image
          src="/assets/Con(Logo).png"
          alt="Mediacon Mike"
          width={250}
          height={250}
        />
        <svg
          className={styles.animatedStroke}
          viewBox="0 0 500 800"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M245,10c130,0,235,105,235,235S375,480,245,480S10,375,10,245S115,10,245,10Z"
            className={styles.strokePath}
          />
        </svg>
      </div>
    </div>
  );
}
