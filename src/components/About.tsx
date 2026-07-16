import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.section}>
      <p className={styles.body}>
        Hi! I'm a freshman at UC Berkeley. I mostly work with NLP. I like 
        hikes, bullet chess, BJJ, beach volleyball, pickleball, back
        days, Vim, and thai food. My work is below!
      </p>
    </section>
  );
}
