import fs from "fs";
import matter from "gray-matter";
import slug from "slug";
import { getShow } from "../utils/spotify";

import Link from "next/link";

import EpisodeList from "../components/episodeList";
import PostsList from "../components/postsList";
import Stats from "../components/stats";

export default function Home({ posts, eps }) {
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
            <Link href="#posts" className="btn btn-primary">
              Leggi qualche articolo
            </Link>
          </div>
        </div>
      </div>

      <PostsList id="posts" posts={posts} limit={1} />

      <EpisodeList episodes={eps}>
        <p>
          Ecco gli ultimi episodi che abbiamo caricato all&apos;interno del
          podcast che manteniamo per tutta la community.
        </p>
      </EpisodeList>
    </>
  );
}

export async function getStaticProps() {
  // Retrieve podcast episodes
  const episodes = await getShow(4);
  const data = await episodes.json();
  const eps = data.items.map((episode) => ({
    name: episode.name,
    slug: slug(episode.name),
    image: episode.images[0].url,
    htmlDesc: { __html: episode.html_description },
    desc: episode.description,
    id: episode.id.toString(),
  }));

  // Retrieve articles
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
      eps,
    },
  };
}
