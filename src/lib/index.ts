import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const BASE_PATH = "/src/articles";
const ARTICLES_PATH = path.join(process.cwd(), BASE_PATH);

export const parseArticle = async (articlePath: string) => {
  const file = fs.readFileSync(articlePath, "utf-8");
  const { data, content } = matter(file);
  return {
    url: `/blog/${encodeURI(data.title)}`,
    data,
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

export const getArticle = async (encodedTitle: string) => {
  const decodedTitle = decodeURI(encodedTitle);
  const article = await parseArticle(`${ARTICLES_PATH}/${decodedTitle}.mdx`);
  return article;
};
