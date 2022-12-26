import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import PostsList from "../components/postsList";
import { NextSeo } from "next-seo";

export default function Disclamer({ content }) {
  return (
    <>
      <section className="max-w-3xl mx-auto prose-lg">
        <MDXRemote {...content} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const disclamer = fs.readFileSync("disclamer.mdx");

  const { data: frontmatter, content } = matter(disclamer);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}
