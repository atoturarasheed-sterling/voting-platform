import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Voting Platform
        </Link>
        <div className={styles.links}>
          <Link href="/contests">Contests</Link>
          <Link href="/awards">Awards</Link>
          <Link href="/my-votes">My Votes</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
