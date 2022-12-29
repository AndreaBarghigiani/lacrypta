export default function SpotifyPlayer({ id }) {
  const src = `https://open.spotify.com/embed/episode/${id}?&theme=0`;
  return (
    <iframe
      src={src}
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      className="max-w-2xl mx-auto overflow-hidden rounded-2xl"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
