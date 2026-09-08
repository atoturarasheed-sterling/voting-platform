import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Voting Platform. All rights reserved.</p>
      <div className={styles.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}
