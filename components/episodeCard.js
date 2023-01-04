import { truncate } from "../utils/string";
import Link from "next/link";
import Image from "next/image";

export default function episodeCard({ episode }) {
  return (
    <div className="border shadow-xl shrink-0 lg:basis-1/5 card w-96 bg-base-100 image-full border-base-content border-opacity-30">
      <figure>
        <Image
          src={episode.image}
          alt={episode.name}
          width="400"
          height="400"
        />
      </figure>
      <div className="card-body">
        <h2 className="mb-auto text-2xl card-title">{episode.name}</h2>
        <Link
          href={`podcast/${episode.id}`}
          className="justify-end card-actions"
        >
          <button className="btn btn-secondary">Ascolta</button>
        </Link>
      </div>
    </div>
  );
}
