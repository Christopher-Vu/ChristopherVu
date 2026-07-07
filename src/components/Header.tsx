import { ThemeToggle } from "@/components/ThemeToggle";
import { OWNER_NAME } from "@/content/entries";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.name}>{OWNER_NAME}</p>
        <p className={styles.contact}>you [at] example [dot] com</p>
        <div className={styles.socials}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
