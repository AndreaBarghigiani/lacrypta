import { getShow, getEpisode } from "../../utils/spotify";
import SpotifyPlayer from "../../components/spotifyPlayer";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function PodcastPage({ title, htmlDesc, desc, id }) {
  return (
    <>
      <header>
        <Link href="/podcast">
          <button className="gap-2 btn btn-outline">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Indietro
          </button>
        </Link>
      </header>
      <div className="mx-auto prose-lg">
        <h1>{title}</h1>
        <SpotifyPlayer id={id} />
        <p dangerouslySetInnerHTML={htmlDesc} />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await getShow();
  const data = await res.json();
  const paths = data.items.map((episode) => {
    return {
      params: { podcastID: episode.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.podcastID;
  const res = await getEpisode(id);
  const data = await res.json();
  const htmlDesc = { __html: data.html_description };

  return {
    props: {
      title: data.name,
      published: data.release_date,
      image: data.images[0].url,
      id: data.id,
      htmlDesc,
      desc: data.description,
    },
  };
};
