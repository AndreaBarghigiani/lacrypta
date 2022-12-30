import Post from "./post";

export default function PostsList({ posts, children, id }) {
  const sortedPosts = posts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
  return (
    <div id={id} className="max-w-2xl py-8 mx-auto">
      <h2 className="mb-3 text-3xl font-bold text-center">Ultimi articoli</h2>
      {children}

      {sortedPosts.map(({ slug, frontmatter }) => (
        <Post key={slug} slug={slug} frontmatter={frontmatter} />
      ))}
    </div>
  );
}
