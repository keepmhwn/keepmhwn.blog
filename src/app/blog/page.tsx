import Link from "next/link";
import { Heading, Button } from "@chakra-ui/react";

import { getArticles } from "@/lib";

const BlogPage = async () => {
  const articles = await getArticles();

  return (
    <>
      <Heading color="black">Blog</Heading>
      {articles.map((article) => (
        <Link key={article.data.title} href={article.url}>
          <Button colorScheme="black">{article.data.title}</Button>
        </Link>
      ))}
    </>
  );
};

export default BlogPage;
