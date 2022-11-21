import Post from "./post";

export default function PostsList({ posts }) {
  return (
    <div className="max-w-2xl py-8 mx-auto space-x-3">
      <h2 className="mb-3 text-2xl text-center">Ultimi articoli</h2>
      {posts.map(({ slug, frontmatter }) => (
        <Post slug={slug} frontmatter={frontmatter} />
      ))}
    </div>
  );
}
