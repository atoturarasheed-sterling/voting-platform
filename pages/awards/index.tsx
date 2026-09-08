import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '@/styles/Awards.module.css';

interface Award {
  id: string;
  name: string;
  category: string;
  endDate: string;
}

export default function Awards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - will be replaced with API call
    setAwards([
      {
        id: '1',
        name: 'Best Vocalist',
        category: 'Music',
        endDate: '2024-12-15',
      },
      {
        id: '2',
        name: 'Best Dancer',
        category: 'Performance',
        endDate: '2024-12-20',
      },
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading awards...</div>;

  return (
    <>
      <Head>
        <title>Awards - Voting Platform</title>
      </Head>
      <main className={styles.main}>
        <h1>Artist Awards</h1>
        <div className={styles.awardList}>
          {awards.map((award) => (
            <div key={award.id} className={styles.awardCard}>
              <h2>{award.name}</h2>
              <p>Category: {award.category}</p>
              <p>Ends: {award.endDate}</p>
              <button>Vote</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
