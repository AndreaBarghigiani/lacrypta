import fs from "fs";
import matter from "gray-matter";
import { NextSeo } from "next-seo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Disclamer from "../../components/disclamer";

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <NextSeo title={frontmatter.title} description={frontmatter.excerpt} />

      <article className="max-w-3xl mx-auto prose prose-xl">
        <h1>{frontmatter.title}</h1>

        <Disclamer />

        <MDXRemote {...content} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}
