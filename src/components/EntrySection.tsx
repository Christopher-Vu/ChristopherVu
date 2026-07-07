"use client";

import { useState } from "react";
import type { Entry } from "@/content/entries";
import { DEFAULT_VISIBLE_COUNT } from "@/content/entries";
import { EntryItem } from "@/components/EntryItem";
import styles from "./EntrySection.module.css";

type OrderBy = "selected" | "date";

function sortEntries(entries: Entry[], orderBy: OrderBy): Entry[] {
  const sorted = [...entries];
  if (orderBy === "date") {
    sorted.sort((a, b) => b.date.localeCompare(a.date));
  } else {
    sorted.sort((a, b) => a.order - b.order);
  }
  return sorted;
}

export function EntrySection({
  title,
  entries,
  showHint = false,
  preExpandFirst = false,
}: {
  title: string;
  entries: Entry[];
  showHint?: boolean;
  preExpandFirst?: boolean;
}) {
  const [orderBy, setOrderBy] = useState<OrderBy>("selected");
  const [expanded, setExpanded] = useState(false);

  const sortedEntries = sortEntries(entries, orderBy);
  const visibleEntries = expanded
    ? sortedEntries
    : sortedEntries.slice(0, DEFAULT_VISIBLE_COUNT);
  const canLoadMore = sortedEntries.length > DEFAULT_VISIBLE_COUNT;

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.orderBy}>
          <span>Order by</span>
          <button
            type="button"
            className={
              orderBy === "selected"
                ? styles.orderByActive
                : styles.orderByOption
            }
            onClick={() => setOrderBy("selected")}
            aria-pressed={orderBy === "selected"}
          >
            Selected
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={
              orderBy === "date" ? styles.orderByActive : styles.orderByOption
            }
            onClick={() => setOrderBy("date")}
            aria-pressed={orderBy === "date"}
          >
            Date
          </button>
        </div>
      </div>
      {showHint && (
        <p className={styles.hint}>· click any entry to expand</p>
      )}
      <ul className={styles.list}>
        {visibleEntries.map((entry, index) => (
          <EntryItem
            key={entry.title}
            entry={entry}
            defaultPinned={preExpandFirst && index === 0}
          />
        ))}
      </ul>
      {canLoadMore && (
        <button
          type="button"
          className={styles.loadMore}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "Load more"}
        </button>
      )}
    </section>
  );
}
