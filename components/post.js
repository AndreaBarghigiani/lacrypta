import { postDate, timestamp } from "../utils/date";
import Link from "next/link";

export default function Post({ slug, frontmatter }) {
  return (
    <div key={slug} className="shadow-xl card bg-base-100">
      <Link href={`/post/${slug}`} className="card-body">
        <h3 className="card-title">{frontmatter.title}</h3>
        <time dateTime={timestamp(frontmatter.date)}>
          {postDate(frontmatter.date)}
        </time>
        <p>{frontmatter.excerpt}</p>
      </Link>
    </div>
  );
}
