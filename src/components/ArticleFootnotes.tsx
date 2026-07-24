import type { ReactNode } from "react";
import styles from "./ArticleFootnotes.module.css";

/**
 * Inline footnote reference — renders a superscript link that jumps to the
 * matching footnote in the article's <Footnotes> block.
 */
export function Ref({ id }: { id: string | number }) {
  return (
    <sup className={styles.ref} id={`fnref-${id}`}>
      <a href={`#fn-${id}`} aria-label={`Jump to footnote ${id}`}>
        [{id}]
      </a>
    </sup>
  );
}

/**
 * A single footnote definition. Renders its number, the note body, and a
 * back-link that returns to the inline reference.
 */
export function Footnote({
  id,
  children,
}: {
  id: string | number;
  children: ReactNode;
}) {
  return (
    <li className={styles.item} id={`fn-${id}`}>
      <span className={styles.number} aria-hidden="true">
        {id}.
      </span>
      <span className={styles.body}>
        {children}{" "}
        <a
          className={styles.backref}
          href={`#fnref-${id}`}
          aria-label={`Back to footnote ${id} reference`}
        >
          ↩
        </a>
      </span>
    </li>
  );
}

/**
 * Footnotes footer for an article. Place at the end of the MDX body and wrap
 * one <Footnote> per note.
 */
export function Footnotes({ children }: { children: ReactNode }) {
  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />
      <ol className={styles.list}>{children}</ol>
    </footer>
  );
}
