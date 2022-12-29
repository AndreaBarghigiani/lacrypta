import { getShow, getEpisode } from "../../utils/spotify";
import SpotifyPlayer from "../../components/spotifyPlayer";
import { NextSeo } from "next-seo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function PodcastPage({ title, htmlDesc, desc, id }) {
  return (
    <>
      <div className="mx-auto prose-lg">
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={htmlDesc} />
        <SpotifyPlayer id={id} />
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
