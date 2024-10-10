import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import MDXComponents from "@/components/mdx";

type Props = {
  content: string;
};

const ArticleBody = ({ content }: Props) => {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [[rehypePrettyCode]],
        },
      }}
      components={MDXComponents}
    />
  );
};

export default ArticleBody;
