"use client";
import styles from "../styles/Loader.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const currentIdx = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      currentIdx.current = window.history.state?.idx ?? 0;

      const handleNavigation = () => {
        const nextIdx = window.history.state?.idx ?? 0;
        const goingBack = nextIdx < (currentIdx.current ?? 0);

        // Debug logs
        console.log("Current:", currentIdx.current, "Next:", nextIdx, "Back?", goingBack);

        currentIdx.current = nextIdx;

        if (!goingBack) {
          setIsLoading(true);

          // Simulate loading delay
          setTimeout(() => {
            setIsLoading(false);
          }, 1000); // show for 1 second
        }
      };

      window.addEventListener("popstate", handleNavigation);
      return () => window.removeEventListener("popstate", handleNavigation);
    }
  }, []);

  // Also detect direct route change
  useEffect(() => {
    // Treat it as forward nav (initial mount excluded)
    if (currentIdx.current !== null) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!isLoading) return null;

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
          <circle cx="125" cy="130" r="100" className={styles.strokePath} />
        </svg>
      </div>
    </div>
  );
}
