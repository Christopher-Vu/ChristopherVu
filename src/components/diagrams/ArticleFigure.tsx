import styles from "./ArticleFigure.module.css";

type ArticleFigureProps = {
  /** Base name of the diagram pair, e.g. "diagram-1" resolves to
   *  /article-images/light-diagram-1.<ext> and /article-images/dark-diagram-1.<ext> */
  name: string;
  alt: string;
  /** Image extension for the light/dark pair. Defaults to "jpg"; use "svg" for
   *  vector diagrams (crisp at any size). */
  ext?: string;
  /** Drop the image border and add internal padding — suited to transparent
   *  vector diagrams that blend into the page. Defaults to false. */
  plain?: boolean;
  caption?: string;
};

/**
 * Renders a light/dark image pair for an article figure. Both images are in the
 * DOM; CSS shows the one matching the active `data-theme` (set pre-hydration by
 * ThemeScript), so the correct diagram is visible on first paint with no flicker
 * and no client JS required.
 */
export function ArticleFigure({
  name,
  alt,
  ext = "jpg",
  plain = false,
  caption,
}: ArticleFigureProps) {
  const imageClass = `${styles.image}${plain ? ` ${styles.plain}` : ""}`;
  return (
    <figure className={styles.figure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${imageClass} ${styles.light}`}
        src={`/article-images/light-${name}.${ext}`}
        alt={alt}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${imageClass} ${styles.dark}`}
        src={`/article-images/dark-${name}.${ext}`}
        alt={alt}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
