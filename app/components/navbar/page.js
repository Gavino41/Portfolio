import styles from './page.module.css';


export default function Navbar() {
  return(
    <div className={styles.main} >
      <div className={styles.links}>
        <a href={"/home"} className={styles.linkText}> <h1> Home </h1> </a>
        <a href={"/projects"} className={styles.linkText}> <h1> Projects </h1> </a>
        <a href={"/aboutMe"} className={styles.linkText}> <h1> About Me </h1> </a>
      </div>
      <div className={styles.contactMeLink} >
        <a href={"/contactMe"} className={styles.contactMeLinkText}> <h1 className={styles.contactMeLinkText}> Contact Me </h1> </a>
      </div>
    </div>
  );
}
