export default function SpotifyPlayer({ link }) {
  const id = link.slice(33, 55);
  console.log(link, id);
  const src = `https://open.spotify.com/embed/episode/${id}?&theme=0`;
  return (
    <iframe
      src={src}
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      className="overflow-hidden rounded-2xl"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
