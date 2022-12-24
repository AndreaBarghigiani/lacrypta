import fs from "fs";
import matter from "gray-matter";

import PostsList from "../components/postsList";

export default function Posts({ posts }) {
  return (
    <>
      <PostsList posts={posts}>
        <p className="my-4">
          Questa &egrave; la collezione di articoli che abbiamo pubblicato nel
          tempo, non esitare a condividerli o a farci sapere che ne pensi
          all&lsquo;interno del nostro server Discord.
        </p>
      </PostsList>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
