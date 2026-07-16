"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { Entry } from "@/content/entries";
import { OWNER_NAME } from "@/content/entries";
import styles from "./EntryItem.module.css";

const LINK_LABELS: Record<keyof Entry["links"], string> = {
  github: "GitHub",
  arxiv: "arXiv",
  demo: "Demo",
  paper: "Paper",
};

export function EntryItem({
  entry,
  defaultPinned = false,
}: {
  entry: Entry;
  defaultPinned?: boolean;
}) {
  const [pinned, setPinned] = useState(defaultPinned);
  const panelId = useId();

  function togglePinned() {
    setPinned((current) => !current);
  }

  const linkEntries = Object.entries(entry.links).filter(
    ([, url]) => url,
  ) as [keyof Entry["links"], string][];

  return (
    <li
      className={`${styles.entry} ${pinned ? styles.pinned : ""}`}
      onClick={togglePinned}
    >
      <button
        type="button"
        className={styles.entryToggle}
        onClick={(event) => {
          event.stopPropagation();
          togglePinned();
        }}
        aria-expanded={pinned}
        aria-controls={panelId}
      >
        <span>{entry.title}</span>
        <span className={styles.chevron} aria-hidden="true">
          ⌄
        </span>
      </button>
      <p className={styles.contributors}>
        {entry.contributors.map((contributor, index) => (
          <span key={contributor}>
            {index > 0 && ", "}
            <span
              className={contributor === OWNER_NAME ? styles.owner : undefined}
            >
              {contributor}
            </span>
          </span>
        ))}
      </p>
      <p className={styles.meta}>
        {entry.source} · {entry.year}
      </p>
      <div className={styles.panel} id={panelId}>
        <div className={styles.panelInner}>
          <p className={styles.summary}>{entry.summary}</p>
          {linkEntries.length > 0 && (
            <div className={styles.links}>
              {linkEntries.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  onClick={(event) => event.stopPropagation()}
                >
                  {LINK_LABELS[key]}
                </a>
              ))}
            </div>
          )}
          {entry.article && (
            <Link
              href={`/posts/${entry.article}`}
              className={styles.readMore}
              onClick={(event) => event.stopPropagation()}
            >
              read more (article) →
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
