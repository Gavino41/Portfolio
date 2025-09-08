import styles from './page.module.css'

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.header}> Projects </h1>
      <div className={styles.projectsContainer}>
        <div className={styles.project} >
          <div className={styles.projectTitleDiv}>
            <h1 className={styles.projectTitle} >Lead Full Stack Engineer </h1>
            <h1 className={styles.jobDuration} > 1 Years</h1>
            <h1 className={styles.jobTitle} >Cooookies With Us</h1>
          </div>
          <div className={styles.description}>
            <ul className={styles.list}>
              <li className={styles.bulletPoints}>
                Created website infrastructure like Github, Database and Server 
              </li>
              <li className={styles.bulletPoints}>
                Created and manage all code both Front and Back ends
              </li>
              <li className={styles.bulletPoints}>
                Created and documented all QA tests
              </li>
              <li className={styles.bulletPoints}>
                Managed client and all requests well staying on deadlines
              </li>
            </ul>
          </div>
          <div className={styles.technology} >
            <p className={styles.techHeader} >Technologies Used: </p>
            <div className={styles.technologiesContainer}>
              <p className={styles.technologies} > React </p>
              <p className={styles.technologies} > Flask </p>
              <p className={styles.technologies} > CloudFlare </p>
              <p className={styles.technologies} > JavaScript </p>
              <p className={styles.technologies} > Github </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.project} >
          <div className={styles.projectTitleDiv}>
            <h1 className={styles.projectTitle} >Full Stack Mobile Engineer </h1>
            <h1 className={styles.jobDuration} > 2 Years</h1>
            <h1 className={styles.jobTitle} >EventCo</h1>
          </div>
          <div className={styles.description}>
            <ul className={styles.list}>
              <li className={styles.bulletPoints}>
                Created App infrastructure like Github, Database and Server 
              </li>
              <li className={styles.bulletPoints}>
                Created and manage all code both Front and Back ends
              </li>
              <li className={styles.bulletPoints}>
                Created and documented all QA tests
              </li>
              <li className={styles.bulletPoints}>
                Managed client and all requests well staying on deadlines
              </li>
            </ul>
          </div>
          <div className={styles.technology} >
            <p className={styles.techHeader} >Technologies Used: </p>
            <div className={styles.technologiesContainer}>
              <p className={styles.technologies} > React Native</p>
              <p className={styles.technologies} > FireBase </p>
              <p className={styles.technologies} > JavaScript </p>
              <p className={styles.technologies} > Github </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.project} >
          <div className={styles.projectTitleDiv}>
            <h1 className={styles.projectTitle} >IT Specialst</h1>
            <h1 className={styles.jobDuration} > 4 Years</h1>
            <h1 className={styles.jobTitle} >Bearing Telecommunications inc.</h1>
          </div>
          <div className={styles.description}>
            <ul className={styles.list}>
              <li className={styles.bulletPoints}>
                Created IT infrastructure including all company computers and phones
              </li>
              <li className={styles.bulletPoints}>
                Created website for company
              </li>
              <li className={styles.bulletPoints}>
                Created network infrastructure
              </li>
              <li className={styles.bulletPoints}>
                Created comapany server that is still in use after 7 years
              </li>
            </ul>
          </div>
          <div className={styles.technology} >
            <p className={styles.techHeader} >Technologies Used: </p>
            <div className={styles.technologiesContainer}>
              <p className={styles.technologies} > WordPress</p>
              <p className={styles.technologies} > Cisco </p>
              <p className={styles.technologies} > Synology </p>
              <p className={styles.technologies} > CloudFlare </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects;
