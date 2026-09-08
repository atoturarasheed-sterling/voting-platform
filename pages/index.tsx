import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Voting Platform - Beauty Contests & Artist Awards</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Voting Platform</h1>
          <p className={styles.description}>
            Vote for your favorite beauty contests and artist awards
          </p>
          <div className={styles.grid}>
            <Link href="/contests" className={styles.card}>
              <h2>Browse Contests &rarr;</h2>
              <p>Explore ongoing beauty contests</p>
            </Link>
            <Link href="/awards" className={styles.card}>
              <h2>Artist Awards &rarr;</h2>
              <p>Vote for amazing artists</p>
            </Link>
            <Link href="/my-votes" className={styles.card}>
              <h2>My Votes &rarr;</h2>
              <p>View your voting history</p>
            </Link>
            <Link href="/about" className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Learn more about our platform</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
