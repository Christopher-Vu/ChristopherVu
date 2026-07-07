import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./ArticleHeader.module.css";

export function ArticleHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.back}>
        ← Home
      </Link>
      <ThemeToggle />
    </header>
  );
}
