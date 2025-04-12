// src/components/Loader.tsx
"use client"
import Image from "next/image"
import styles from "../styles/Loader.module.css"

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.glowAnimation}>
        <Image
          src="/assets/logo.png"
          alt="Mediacon Logo"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  )
}
