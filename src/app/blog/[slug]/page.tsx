import { getArticlePaths, parseArticle, getArticle } from "@/lib";

type Props = {
  params: { title: string; slug: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = getArticlePaths();
  const articles = await Promise.all(paths.map((path) => parseArticle(path)));
  return articles.map((article) => ({
    slug: encodeURI(article.data.title),
  }));
}

const Article = async ({ params }: Props) => {
  const article = await getArticle(params.slug);
  return <>{article.data.title}</>;
};

export default Article;
