import slug from "slug";
import { getShow } from "../../utils/spotify";
import { NextSeo } from "next-seo";
import EpisodeList from "../../components/episodeList";

export default function Podcast({ eps }) {
  // console.log("eps", eps);
  return (
    <>
      <NextSeo
        title="Il nostro Podcast"
        description="Il podcast dove raccogliamo gli AMA dei progetti pi&uacute; interessanti."
      />

      <header className="max-w-2xl mx-auto prose-xl text-center">
        <h1>I nostri podcast</h1>
        <p>
          <em>La Crypta</em> &egrave; lieta di fornirvi un feed di episodi che
          raccolgono gli ultimi AMA e news che riguardano i progetti che
          seguiamo direttamente o che saranno di aiuto per la vostra esperienza
          crypto.
        </p>
      </header>

      <EpisodeList episodes={eps} />
    </>
  );
}

export async function getStaticProps() {
  const response = await getShow();
  const data = await response.json();

  const eps = data.items.map((episode) => {
    return {
      name: episode.name,
      slug: slug(episode.name),
      image: episode.images[0].url,
      htmlDesc: { __html: episode.html_description },
      desc: episode.description,
      id: episode.id.toString(),
    };
  });

  return {
    props: {
      eps,
    },
  };
}
