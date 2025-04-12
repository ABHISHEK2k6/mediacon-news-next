"use client"
import styles from "@/src/styles/ContentPage.module.css"
import { useParams } from "next/navigation"
import { middleEastNews } from "@/src/lib/data"
import { usPolitics } from "@/src/lib/data"
import { useRouter } from 'next/navigation';
import Image from "next/image"

export default function Content() {

  const router = useRouter();

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
          <button onClick={() => router.push('../')} className={styles.button}>&#8249;</button>
          <div>
            <Image
              src={content.image}
              alt={content.title}
              className={styles.thumbnail}
              width={500} height={500}
            />
          </div>
          <div className={styles.desc}>
            <h2>{content.title}</h2>
            <div className={styles.date}><p>{content.author} &#x2022; {content.date}</p></div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <Image id={styles.logo} src="/assets/Con(Logo).png" alt="MediaCon Logo" width={500} height={500} />
            <div><Image className={styles.name} src="/assets/Mediacon(Logo_OG1).png" alt="" width={500} height={500}/></div>
          </div>
          <h2>{content.content}</h2>
        </div>
      </div>
    </div>
  )
}