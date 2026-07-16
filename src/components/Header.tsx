import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OWNER_NAME } from "@/content/entries";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <Image
          src="/profile.png"
          alt={OWNER_NAME}
          width={96}
          height={96}
          className={styles.photo}
          priority
        />
        <div>
          <p className={styles.name}>{OWNER_NAME}</p>
          <p className={styles.contact}>christopher [dot] vu [at] berkeley [dot] edu</p>
          <div className={styles.socials}>
            <a
              href="https://github.com/Christopher-Vu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="https://x.com/ChrisMV12799418" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a
              href="https://www.linkedin.com/in/chrismichaelvu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
