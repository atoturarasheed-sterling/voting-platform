import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '@/styles/Contests.module.css';

interface Contest {
  id: string;
  name: string;
  description: string;
  endDate: string;
}

export default function Contests() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data - will be replaced with API call
    setContests([
      {
        id: '1',
        name: 'Miss Global 2024',
        description: 'International beauty pageant',
        endDate: '2024-12-31',
      },
      {
        id: '2',
        name: 'Fashion Model Awards',
        description: 'Annual fashion modeling competition',
        endDate: '2024-11-30',
      },
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading contests...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Head>
        <title>Contests - Voting Platform</title>
      </Head>
      <main className={styles.main}>
        <h1>Beauty Contests</h1>
        <div className={styles.contestList}>
          {contests.map((contest) => (
            <div key={contest.id} className={styles.contestCard}>
              <h2>{contest.name}</h2>
              <p>{contest.description}</p>
              <p>Ends: {contest.endDate}</p>
              <button>Vote Now</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
