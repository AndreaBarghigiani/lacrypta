import Link from "next/link";
import EpisodeCard from "./episodeCard";

export default function EpisodeList({ episodes, children, btn }) {
  return (
    <div className="w-10/12 mx-auto">
      <header className="mb-4 prose-xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-center">Ultimi episodi</h2>
        {children}
      </header>

      {episodes.length ? (
        <section className="flex flex-wrap justify-center gap-3">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </section>
      ) : null}

      {btn ? (
        <footer className="my-8 text-center">
          <Link href="/podcast" className="btn btn-primary btn-lg btn-outline">
            Scoprili tutti
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

EpisodeList.defaultProps = {
  btn: true,
};
