import Link from "next/link";
import styles from "./main-header.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>NextEvents</span>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">
              <span className={styles.navLink}>Browse All Events</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
