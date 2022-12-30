import Link from "next/link";
import Post from "./post";

export default function PostsList({ posts, children, id, limit, sorted }) {
  let dPosts = posts;

  if (sorted) {
    dPosts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
  }

  if (limit) {
    dPosts = dPosts.slice(0, limit);
  }

  return (
    <div id={id} className="max-w-2xl py-8 mx-auto">
      <h2 className="mb-3 text-3xl font-bold text-center">Ultimi articoli</h2>
      {children}

      {dPosts.map(({ slug, frontmatter }) => (
        <Post key={slug} slug={slug} frontmatter={frontmatter} />
      ))}

      {posts.length > limit ? (
        <footer className="my-8 text-center">
          <Link href="/posts" className="btn btn-primary btn-lg">
            Leggili tutti
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

PostsList.defaultProps = {
  limit: 0,
  sorted: true,
};
