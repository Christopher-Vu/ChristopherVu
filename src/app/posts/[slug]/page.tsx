import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleHeader } from "@/components/ArticleHeader";
import { PageShell } from "@/components/PageShell";
import { getArticleBySlug, getArticleSlugs } from "@/content/articles";
import { SampleDiagram } from "@/components/diagrams/SampleDiagram";
import styles from "./page.module.css";

const mdxComponents = {
  SampleDiagram,
};

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = article;

  return (
    <PageShell>
      <ArticleHeader />
      <article>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.meta}>
          {formatDate(frontmatter.date)} ·{" "}
          {frontmatter.contributors.join(", ")}
        </p>
        <div className={styles.body}>
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    </PageShell>
  );
}
