import { Box, Divider } from "@chakra-ui/react";

import ArticleHeader from "@/components/article/detail/header";
import ArticleBody from "@/components/article/detail/body";

import { getArticlePaths, parseArticle, getArticle } from "@/lib";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

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
      <Divider
        width="50%"
        height="1px"
        bgColor="gray.500"
        margin="0 auto"
        my="24px"
      />
      <ArticleBody content={article.content} />
    </Box>
  );
};

export default Article;
