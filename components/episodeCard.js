import Link from "next/link";

export default function episodeCard({ episode }) {
  return (
    <div className="shadow-xl card w-96 bg-base-100 image-full">
      <figure>
        <img src={episode.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{episode.name}</h2>
        <p dangerouslySetInnerHTML={episode.desc} />
        <Link
          href={`podcast/${episode.id}`}
          className="justify-end card-actions"
        >
          <button className="btn btn-primary">Ascolta</button>
        </Link>
      </div>
    </div>
  );
}
