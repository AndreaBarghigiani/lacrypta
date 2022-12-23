import { postDate, timestamp } from "../utils/date";
import Link from "next/link";

export default function Post({ slug, frontmatter }) {
  return (
    <div
      key={slug}
      className="my-6 border shadow-xl card bg-base-100 border-base-content"
    >
      <div className="card-body">
        <Link href={`/post/${slug}`}>
          <h3 className="card-title">{frontmatter.title}</h3>
        </Link>
        <time dateTime={timestamp(frontmatter.date)}>
          {postDate(frontmatter.date)}
        </time>
        <p>{frontmatter.excerpt}</p>

        <div className="justify-start card-actions">
          <Link href={`/post/${slug}`} className="btn btn-secondary">
            Leggi
          </Link>
        </div>
      </div>
    </div>
  );
}
