import fs from "fs";
import matter from "gray-matter";

import PostsList from "../components/postsList";
import Stats from "../components/stats";

export default function Home({ posts }) {
  return (
    <>
      <div
        className="border shadow rounded-3xl hero bg-base-200 min-h-max border-base-300"
        style={{
          backgroundImage: `url('images/hero-geroglifici.png')`,
          backgroundSize: `contain`,
        }}
      >
        <div className="hero-overlay rounded-3xl bg-opacity-60"></div>
        <div className="p-20 text-center shadow-2xl hero-content bg-gradient-to-r from-base-300 via-base-100 to-base-300">
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

      <Stats />

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
