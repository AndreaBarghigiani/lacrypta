import Post from "./post";

export default function PostsList({ posts }) {
  const sortedPosts = posts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
  return (
    <div className="max-w-2xl py-8 mx-auto space-x-3">
      <h2 className="mb-3 text-3xl font-bold text-center">Ultimi articoli</h2>
      {sortedPosts.map(({ slug, frontmatter }) => (
        <Post key={slug} slug={slug} frontmatter={frontmatter} />
      ))}
    </div>
  );
}
