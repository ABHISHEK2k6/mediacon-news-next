import styles from "../styles/ContentPage.module.css"

export default function Content() {
  return (
    <div className={styles.conatainer}>
      <div className={styles.container2}>
        <div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGtAGz-H036LEh-W9Tli4cC4NCIGmKLAvFg&s"
              alt=""
            />
          </div>
          <div className={styles.desc}>
            <h2>This is the Image description</h2>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <img src="/assets/Con(Logo).png" alt="MediaCon Logo" />
          </div>
          <h2>
            "At least 35 people have lost their lives in a series of devastating road accidents across several states in
            the past 24 hours. The crashes, which occurred in separate incidents, have raised serious concerns about
            road safety measures.", "The most severe incident took place on an interstate highway where a multi-vehicle
            pileup involving two commercial trucks and several passenger vehicles resulted in 17 fatalities. Poor
            visibility due to heavy fog is believed to have been a contributing factor.", "In another incident, a bus
            carrying tourists veered off a mountain road, resulting in 12 deaths and numerous injuries. Initial
            investigations suggest brake failure may have been the cause of this tragic accident.", "The remaining
            fatalities occurred in various smaller incidents across different states. Transportation safety officials
            have announced plans for an emergency meeting to address the alarming spike in road fatalities.",
          </h2>
        </div>
        <div>
          <img id={styles.name} src="/assets/Mediacon(Logo_OG1).png" alt="" />
        </div>
      </div>
    </div>
  )
}
