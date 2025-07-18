"use client"
import styles from './page.module.css';


export default function Navbar() {
  return(
    <div className={styles.main} >
      <div className={styles.links}>
        <a href="#home" className={styles.button}> Gavin Osborne </a>
        <a href="#project" className={styles.button}> Projects </a>
        <a href="#about" className={styles.button}> About Me </a>
      </div>
      <div className={styles.contactMeLink} >
        <a href="#contact" className={styles.contactButton}> Contact Me </a>
      </div>
    </div>
  );
}
