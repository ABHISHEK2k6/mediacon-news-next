"use client";
import styles from "../styles/Loader.module.css";
import Image from "next/image";
import logo from "@/public/assets/Con(Logo).png"; // Direct import

export default function LoadingScreen() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoInner}>
          <Image
            src={logo} // Using directly imported image
            alt="Loading"
            className={styles.logoImage}
            fill
            priority
            quality={100}
          />
        </div>
        <svg className={styles.animatedStroke} viewBox="0 0 250 250">
          <circle cx="125" cy="130" r="100" className={styles.strokePath} />
        </svg>
      </div>
    </div>
  );
}