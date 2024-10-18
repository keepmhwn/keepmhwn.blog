import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";

import ArticleHeader from "@/components/article/detail/header";
import ArticleBody from "@/components/article/detail/body";
import Divider from "@/components/mdx/divider";
import Comments from "../_components/comments";

import { getArticlePaths, parseArticle, getArticle } from "@/lib";

type Props = {
  params: { slug: string };
};

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticle(slug);

  const { title, date, intro, thumbnail } = article.data;

  return {
    title,
    description: intro,
    openGraph: {
      title,
      description: intro,
      type: "article",
      publishedTime: date,
      url: `${domain}/blog/${encodeURIComponent(title)}`,
      images: {
        alt: title,
        url: `${domain}${thumbnail}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const paths = getArticlePaths();
  const articles = await Promise.all(paths.map((path) => parseArticle(path)));
  const slugs = articles.map((article) => ({
    slug:
      process.env.NODE_ENV === "development"
        ? encodeURIComponent(article.data.title)
        : article.data.title,
  }));
  return slugs;
}

const Article = async ({ params }: Props) => {
  const article = await getArticle(params.slug);

  return (
    <Box>
      <ArticleHeader metadata={article.data} />
      <Divider />
      <ArticleBody content={article.content} />
      <Comments />
    </Box>
  );
};

export default Article;
