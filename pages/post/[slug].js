import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ frontmatter, content }) {
  console.log(frontmatter);
  return (
    <div className="max-w-3xl mx-auto prose">
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...content} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}
