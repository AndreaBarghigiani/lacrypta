import Link from "next/link";
import Image from "next/image";

export default function episodeCard({ episode }) {
  return (
    <div className="shadow-xl card w-96 bg-base-100 image-full">
      <figure>
        <Image
          src={episode.image}
          alt={episode.name}
          width="400"
          height="400"
        />
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
