"use client";
import { middleEastNews } from "../lib/data";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/NewYorkTimesHomepage.module.css";
import { usPolitics } from "../lib/data";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

export default function NewYorkTimesHomepage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardWidth = 250;
  const gap = 16;
  const cardSizeWithGap = cardWidth + gap;

  // Setup auto-scroll (only once)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isUserInteracting || !scrollContainerRef.current) return;

      const nextIndex = (currentIndex + 1) % usPolitics.length;
      scrollContainerRef.current.scrollTo({
        left: nextIndex * cardSizeWithGap,
        behavior: "smooth",
      });
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [isUserInteracting, currentIndex]);

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  const handleScroll = () => {
    pauseAutoScroll();
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardSizeWithGap);
      setCurrentIndex(index);
    }
  };

  const pauseAutoScroll = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);

    // Resume auto-scroll after 3s of no interaction
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      pauseAutoScroll();
      const nextIndex = (currentIndex + 1) % usPolitics.length;
      scrollToCard(nextIndex);
    },
    onSwipedRight: () => {
      pauseAutoScroll();
      const prevIndex = (currentIndex - 1 + usPolitics.length) % usPolitics.length;
      scrollToCard(prevIndex);
    },
  });

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * cardSizeWithGap,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>MEDIACON TIME</h1>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.section1}>
          <div className={styles.sectionHeader}>
            <h2>Breaking News</h2>
          </div>

          <div className={styles.scrollWrapper} {...handlers}>
            <div
              ref={scrollContainerRef}
              className={styles.scrollContainer}
              onScroll={handleScroll}
              onMouseEnter={pauseAutoScroll}
              onMouseLeave={() => {
                interactionTimeoutRef.current = setTimeout(() => {
                  setIsUserInteracting(false);
                }, 3000);
              }}
              onTouchStart={pauseAutoScroll}
              onTouchEnd={() => {
                interactionTimeoutRef.current = setTimeout(() => {
                  setIsUserInteracting(false);
                }, 3000);
              }}
            >
              {usPolitics.map((news, index) => (
                <motion.div
                  key={index}
                  onClick={() => router.push(`/content/${news.id}`)}
                  className={styles.cardLarge}
                  animate={{
                    scale: currentIndex === index ? 1.05 : 0.95,
                    opacity: currentIndex === index ? 1 : 0.7,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    loading="lazy"
                    src={news.image}
                    alt={news.alternate}
                    className={styles.imageLarge}
                    width={500}
                    height={500}
                  />
                  <div className={styles.details}>
                    <h3 className={styles.cardTitle}>{news.title}</h3>
                    <p className={styles.cardAuthor}>{news.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.dotsWrapper}>
              {usPolitics.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader2}>
          <h2>Latest News</h2>
        </div>

        <div className={styles.dropnews}>
          {middleEastNews.map((news, index) => (
            <div key={index}>
              <div
                onClick={() => router.push(`/content/${news.id}`)}
                className={styles.newsgrid}
              >
                <div>
                  <Image
                    className={styles.image}
                    src={news.image}
                    alt={news.title}
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <div className={styles.dropnewscontent}>
                  <h4 id={styles.cardTitleSmall}>{news.title}</h4>
                  <div className={styles.description}>
                    <div>
                      <Image
                        src={news.image}
                        alt={news.author}
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.date}>
                      <p>
                        {news.author} • {news.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
