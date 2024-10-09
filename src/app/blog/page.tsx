import { Stack } from "@chakra-ui/react";

import { getArticles } from "@/lib";

import PreviewArticleCard from "@/components/article/preview";

const BlogPage = async () => {
  const articles = await getArticles();

  return (
    <Stack spacing="24px">
      {articles.map((article) => (
        <PreviewArticleCard
          key={article.url}
          href={article.url}
          metadata={article.data}
        />
      ))}
    </Stack>
  );
};

export default BlogPage;
