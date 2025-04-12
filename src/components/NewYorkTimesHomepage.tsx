"use client"
import { middleEastNews } from "../lib/data";
import React, { useRef } from "react"
import { useRouter } from 'next/navigation';
import styles from "../styles/NewYorkTimesHomepage.module.css"
import { usPolitics } from "../lib/data";
import Image from "next/image";

export default function NewYorkTimesHomepage() {

  const router = useRouter();

  const usPoliticsRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Mediacon News</h1>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>US Politics</h2>
          <button className={styles.showAll}>Show all</button>
        </div>
        <div className={styles.scrollWrapper}>
          <div ref={usPoliticsRef} className={styles.scrollContainer}>
            {usPolitics.map((news, index) => (
              <div
                key={index}
                onClick={() => router.push(`/content/${news.id}`)}
                className={styles.cardLarge}
              >
                <img
                  src={news.image}
                  alt={news.alternate}
                  className={styles.imageLarge}
                />
                <div className={styles.details}>
                  <h3 className={styles.cardTitle}>{news.title}</h3>
                  <p className={styles.cardAuthor}>{news.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <div className={styles.sectionHeader2}>
          <h2>Middle East</h2>
          <button className={styles.showAll2}>Show all</button>
        </div>

        <div className={styles.dropnews}>
          {middleEastNews.map((news, index) => (
            <div key={index}>
              <div onClick={() => router.push(`/content/${news.id}`)} className={styles.newsgrid}>
                <div>
                  <img className={styles.image} src={news.image} alt={news.title} />
                </div>
                <div className={styles.dropnewscontent}>
                  <h4 className={styles.cardTitle}>{news.title}</h4>
                  <div className={styles.description}>
                    <div>
                      <img src={news.image} alt={news.author} />
                    </div>
                    <div className={styles.date}>
                      <p>{news.author} &#x2022; {news.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}