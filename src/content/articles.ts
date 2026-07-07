import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ArticleFrontmatter = {
  title: string;
  date: string;
  contributors: string[];
  tldr: string;
};

export type Article = {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getArticleSlugs(): Promise<string[]> {
  const files = await readdir(POSTS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}
