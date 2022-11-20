import fs from "fs";
import matter from "gray-matter";
import { postDate, timestamp } from "../utils/date";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <h1 className="text-4xl text-center">La Crypta</h1>
      <p className="text-center">
        Benvenuti nel portale dove si tratta l'argomento crytovalute con
        serenità e professionalità.
      </p>

      <div className="max-w-lg py-8 mx-auto space-x-3">
        <h2 className="mb-3 text-2xl text-center">Ultimi articoli</h2>
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="py-3 border-b ">
            <Link href={`/post/${slug}`}>
              <h3 className="text-xl">{frontmatter.title}</h3>
              <time dateTime={timestamp(frontmatter.date)}>
                {postDate(frontmatter.date)}
              </time>
              <p>{frontmatter.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
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
