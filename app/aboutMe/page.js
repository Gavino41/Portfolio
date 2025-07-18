import styles from './page.module.css' 


function AboutMe() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutHeader}> About Me </h1>
      <div className={styles.aboutParagraph} >
        <p className={styles.paragraph}>
          A little bit more about me! I enjoy tech and everything tech related.
          I have been building computers since I was 14 and since then always
          loved figuring out how to make my computers do what I want them too.
          To this extent I use arch linux as my main operating system.
          I also use Neovim just to make sure I can customize everything 
          and still be very productive. 
          I also have a huge passion in video games like Counter Strike and Valorant.
          I also love going on walks and going to the gym with my wife!
          I moved and lived to Japan for my wife and look back on it as some of my 
          most fond moments and memories. I am now back in my home country of Canada!
        </p>
      </div>
    </div>
  )
}
export default AboutMe
