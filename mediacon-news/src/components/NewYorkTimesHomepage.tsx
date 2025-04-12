"use client"

import React, { useRef } from "react"
import styles from "../styles/NewYorkTimesHomepage.module.css"

export default function NewYorkTimesHomepage() {
  const usPoliticsRef = useRef<HTMLDivElement>(null)

  const scrollSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 300
      const scrollPosition =
        direction === "left"
          ? ref.current.scrollLeft - scrollAmount
          : ref.current.scrollLeft + scrollAmount
  
      ref.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

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
          <button className={styles.showAll}>Show all </button>
        </div>

        <div className={styles.scrollWrapper}>
          <div ref={usPoliticsRef} className={styles.scrollContainer}>
            <div className={styles.cardLarge}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGtAGz-H036LEh-W9Tli4cC4NCIGmKLAvFg&s"
                alt="Man at White House"
                className={styles.imageLarge}
              />
              <div className={styles.details}>
                <h3 className={styles.cardTitle}>
                  White House Tried to 'Lock Down' Ukraine Call Records, Whistle-blower Says
                </h3>
                <p className={styles.cardAuthor}>Eileen Sullivan</p>
              </div>
            </div>

            <div className={styles.cardLarge}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EJOxo3MFnpjnWD1FB9ba7oHBPh1RZNEO6Q&s"
                alt="US Politics news"
                className={styles.imageLarge}
              />
              <div className={styles.details}>
                <h3 className={styles.cardTitle}>Senate Votes on Key Legislation Ahead of Recess</h3>
                <p className={styles.cardAuthor}>Michael Johnson</p>
              </div>
            </div>

            <div className={styles.cardLarge}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                alt="US Politics news"
                className={styles.imageLarge}
              />
              <div className={styles.details}>
                <h3 className={styles.cardTitle}>New Bill Aims to Address Climate Change Concerns</h3>
                <p className={styles.cardAuthor}>Sarah Thompson</p>
              </div>
            </div>
          </div>

          <button onClick={() => scrollSection(usPoliticsRef, 'left')} className={styles.scrollButtonLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={() => scrollSection(usPoliticsRef, 'right')} className={styles.scrollButtonRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader2}>
          <h2>Middle East</h2>
          <button className={styles.showAll2}>Show all</button>
        </div>

        <div className={styles.dropnews}>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://th-i.thgim.com/public/incoming/b8pfdd/article69385269.ece/alternates/FREE_1200/AP03_28_2025_000172B.jpg"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LvzO9YJaTJ0PCgfhqjLQuwxKpmnYDDippw&s"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://static01.nyt.com/images/2019/10/26/world/26egypt-add/merlin_161580249_debc934b-1424-4794-9be1-3579fd89b3a2-superJumbo.jpg"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img className={styles.image} src="https://images.indianexpress.com/2024/10/Modi-Xi-brics.jpg" alt="" />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://th-i.thgim.com/public/incoming/b8pfdd/article69385269.ece/alternates/FREE_1200/AP03_28_2025_000172B.jpg"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LvzO9YJaTJ0PCgfhqjLQuwxKpmnYDDippw&s"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img
                  className={styles.image}
                  src="https://static01.nyt.com/images/2019/10/26/world/26egypt-add/merlin_161580249_debc934b-1424-4794-9be1-3579fd89b3a2-superJumbo.jpg"
                  alt=""
                />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.newsgrid}>
              <div>
                <img className={styles.image} src="https://images.indianexpress.com/2024/10/Modi-Xi-brics.jpg" alt="" />
              </div>
              <div className={styles.dropnewscontent}>
                <h4 className={styles.cardTitle}>Egypt Approves New Muscle for el-Sisi, Its Leader</h4>
                <div className={styles.description}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBfcE9JXolswWVJV7qR4WWKKjz-MGafQvtg&s"
                      alt=""
                    />
                  </div>
                  <div className={styles.date}>
                    <p>Rosmerry &#x2022; Apr 10,2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
