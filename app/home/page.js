import styles from "./page.module.css"


export default function HomePage() {
  return (
    <div className={styles.main} >
      <h1 className={styles.headerText}> Welcome To My Portfolio! </h1>
      <div className={styles.intro} >
        <div className={styles.introText} >
          <p> Welcome to my website where I will be showcasing off my work
              and my experence. All code for this website will be avaliable
              in the Projects tab at the top of the page. I Am a full stack
              developer with 3 years of experence not including education.
              I have experence in software project management as well as 
              experence as a techinal lead in a small company. </p>
        </div>
      </div>
    </div>
  );
}

