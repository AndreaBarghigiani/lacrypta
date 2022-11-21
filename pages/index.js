import fs from "fs";
import matter from "gray-matter";

import PostsList from "../components/postsList";

export default function Home({ posts }) {
  return (
    <>
      <div className="py-6 hero bg-base-200 min-h-fit">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">La Crypta</h1>
            <p className="py-6">
              Benvenuti nel portale dove si tratta l&apos;argomento crytovalute
              con serenit&aacute; e professionalit&aacute;.
            </p>
            <button className="btn btn-primary">Leggi qualche articolo</button>
          </div>
        </div>
      </div>

      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
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
