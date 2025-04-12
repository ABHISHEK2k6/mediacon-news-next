"use client"
import styles from "@/src/styles/ContentPage.module.css"
import { useParams } from "next/navigation"
import { middleEastNews } from "@/src/lib/data"
import { usPolitics } from "@/src/lib/data"
import Image from "next/image"

export default function Content() {

  const { id } = useParams();
  const article1 = middleEastNews.find(item => item.id === id);
  const article2 = usPolitics.find(item => item.id === id);

  const content = article1 || article2;

  if (!content) {
    return <p>Article not found.</p>;
  }


  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div>
          <div>
            <Image
              src={content.image}
              alt={content.title}
              className={styles.thumbnail}
            />
          </div>
          <div className={styles.desc}>
            <h2>{content.title}</h2>
            <div className={styles.date}><p>{content.author} &#x2022; {content.date}</p></div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <Image id={styles.logo} src="/assets/Con(Logo).png" alt="MediaCon Logo" />
            <div><Image className={styles.name} src="/assets/Mediacon(Logo_OG1).png" alt="" /></div>
          </div>
          <h2>{content.content}</h2>
        </div>
      </div>
    </div>
  )
}