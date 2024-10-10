import type { MDXComponents as Components } from "mdx/types";

import { OrderedList, UnorderedList, ListItem } from "@chakra-ui/react";

import Divider from "./divider";
import Paragraph from "./paragraph";
import Heading2 from "./heading2";
import Heading3 from "./heading3";

const MDXComponents: Components = {
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  hr: Divider,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
};

export default MDXComponents;
