import type { MarkdownMetadata } from "@/types/blog";

import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const BASE_PATH = "/src/articles";
const ARTICLES_PATH = path.join(process.cwd(), BASE_PATH);

const DEFAULT_THUMBNAIL = "/images/blog/default-thumbnail.jpg";

export const parseArticle = async (
  articlePath: string
): Promise<{ data: MarkdownMetadata; content: string }> => {
  const file = fs.readFileSync(articlePath, "utf-8");
  const { data, content } = matter(file);

  const metadata: MarkdownMetadata = {
    title: data.title ?? "",
    date: data.date ?? "",
    intro: data.intro ?? "",
    thumbnail: data.thumbnail ?? DEFAULT_THUMBNAIL,
  };

  return {
    data: metadata,
    content,
  };
};

export const getArticlePaths = () => {
  const articlePaths = sync(`${ARTICLES_PATH}/**/*.mdx`);
  return articlePaths;
};

export const getArticles = async () => {
  const paths = getArticlePaths();
  const articles = await Promise.all(paths.map((path) => parseArticle(path)));
  return articles;
};

export const getArticle = async (title: string) => {
  const decodedTitle = decodeURIComponent(title);
  const article = await parseArticle(`${ARTICLES_PATH}/${decodedTitle}.mdx`);
  return article;
};
