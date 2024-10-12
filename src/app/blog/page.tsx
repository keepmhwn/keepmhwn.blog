import { Stack } from "@chakra-ui/react";

import { getArticles } from "@/lib";

import PreviewArticleCard from "@/components/article/preview";

import NoArticles from "./_components/no-articles";

const BlogPage = async () => {
  const articles = await getArticles();

  return (
    <Stack spacing="24px">
      <NoArticles empty={articles.length === 0}>
        {articles.map((article) => (
          <PreviewArticleCard
            key={`${article.data.title}-${article.data.date}`}
            metadata={article.data}
          />
        ))}
      </NoArticles>
    </Stack>
  );
};

export default BlogPage;
