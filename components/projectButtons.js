import classnames from "classnames";

export default function ProjectButtons({ links }) {
  const keys = Object.keys(links);

  return (
    <div className="btn-group btn-group-vertical">
      {keys.map((key) => (
        <a
          key={key}
          className={classnames({
            btn: true,
            "bg-indigo-700": key === "discord",
            "hover:bg-indigo-900": key === "discord",
            "bg-orange-600": key === "dapp",
            "hover:bg-orange-800": key === "dapp",
            "bg-stone-200": key === "whitepaper",
            "hover:bg-stone-400": key === "whitepaper",
            "text-black": key === "whitepaper",
          })}
          target="_blank"
          href={links[key]}
        >
          {key}
        </a>
      ))}
    </div>
  );
}
