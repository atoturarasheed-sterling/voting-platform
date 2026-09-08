import Head from 'next/head';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Voting Platform</title>
      </Head>
      <main className={styles.main}>
        <h1>About Voting Platform</h1>
        <p>
          Our platform provides a secure and fair voting system for beauty contests
          and artist awards. We are committed to transparency and equal representation.
        </p>
      </main>
    </>
  );
}
