import styles from "./ArticleFigure.module.css";

type ArticleFigureProps = {
  /** Base name of the diagram pair, e.g. "diagram-1" resolves to
   *  /article-images/light-diagram-1.jpg and /article-images/dark-diagram-1.jpg */
  name: string;
  alt: string;
  caption?: string;
};

/**
 * Renders a light/dark image pair for an article figure. Both images are in the
 * DOM; CSS shows the one matching the active `data-theme` (set pre-hydration by
 * ThemeScript), so the correct diagram is visible on first paint with no flicker
 * and no client JS required.
 */
export function ArticleFigure({ name, alt, caption }: ArticleFigureProps) {
  return (
    <figure className={styles.figure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${styles.image} ${styles.light}`}
        src={`/article-images/light-${name}.jpg`}
        alt={alt}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${styles.image} ${styles.dark}`}
        src={`/article-images/dark-${name}.jpg`}
        alt={alt}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
