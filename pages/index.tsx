import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shawn Croes</title>
        <meta name="description" content="Shawn Croes, front-end developer." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.maxWidthContainer}>
          <a href="#">
            <span>Shawn Croes</span>
            <span>Front-end developer</span>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <h1>
          Hi, I&lsquo;m Shawn.
        </h1>

        <p>
          A dutch front-end developer with a human-centered and detail oriented approach to creation.
        </p>

        <p>
          A team player who loves to co-create and exchange ideas, with an analytical and open-minded attitude.
        </p>
        <p>
          My favourite part of the job is the fact that I’m always learning and evolving. Constantly being confronted with new technology, insights and challenges means that there’s no room for boredom to set in.
        </p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.maxWidthContainer}>
          <nav>
            <ul>
              <li><a href="mailto:croesshawn@gmail.com">Email</a></li>
              <li><a href="http://www.linkedin.com/in/shawn-croes" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
