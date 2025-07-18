import styles from "./page.module.css"
import AboutMe from "../aboutMe/page";
import Projects from "../projects/page";
import ContactMe from "../contactMe/page";

export default function HomePage() {
  return (
    <div className={styles.main} >
      <div id="home">
        <h1 className={styles.job}> Full Stack Developer </h1>
        <div className={styles.intro} >
          <img src="me.jpg" alt="Me" className={styles.image} />
          <div className={styles.introText} >
            <p> Welcome to my website where I will be showcasing my work
              and my experence. I am a full stack developer with a small comapny called Cooookies With Us
              my main tech stack is <span className={styles.importantWords}>React </span>, <span className={styles.importantWords}>Flask </span> (Python) and <span className={styles.importantWords}>Firebase. </span>I also have experence in Moble development
              with <span className={styles.importantWords}>React Native </span>, Firebase, Flask as a freelance developer. I also have lots of experence in documentation
              and project management using Jira, Github and Cloudflare.
            </p>
          </div>
        </div>
        <div className={styles.scrollingContainer}>
          <div className={styles.scrollingContent}>
            <img src="react.png" alt="react" className={styles.scrollImage} />
            <img src="flask.png" alt="flask" className={styles.scrollImage} />
            <img src="python.png" alt="python" className={styles.scrollImage} />
            <img src="firebase.png" alt="firebase" className={styles.scrollImage} />
            <img src="javascript.png" alt="javascript" className={styles.scrollImage} />
          </div>
        </div>
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

