import Head from 'next/head';
import styles from '@/styles/MyVotes.module.css';

export default function MyVotes() {
  return (
    <>
      <Head>
        <title>My Votes - Voting Platform</title>
      </Head>
      <main className={styles.main}>
        <h1>My Voting History</h1>
        <p>Your voting history will appear here.</p>
      </main>
    </>
  );
}
