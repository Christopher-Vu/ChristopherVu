import type { Entry } from "@/content/entries";
import { OWNER_NAME } from "@/content/entries";
import styles from "./EntrySection.module.css";

export function EntrySection({
  title,
  entries,
}: {
  title: string;
  entries: Entry[];
}) {
  const selectedEntries = entries.filter((entry) => entry.selected);

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>{title}</h2>
        <span className={styles.viewToggle}>( Selected / All )</span>
      </div>
      <ul className={styles.list}>
        {selectedEntries.map((entry) => (
          <li key={entry.title} className={styles.entry}>
            <div className={styles.entryTitleRow}>
              <span>{entry.title}</span>
              <span className={styles.chevron}>⌄</span>
            </div>
            <p className={styles.contributors}>
              {entry.contributors.map((contributor, index) => (
                <span key={contributor}>
                  {index > 0 && ", "}
                  <span
                    className={
                      contributor === OWNER_NAME ? styles.owner : undefined
                    }
                  >
                    {contributor}
                  </span>
                </span>
              ))}
            </p>
            <p className={styles.meta}>
              {entry.source} · {entry.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
