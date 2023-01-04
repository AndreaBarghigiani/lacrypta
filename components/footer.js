import { days } from "../utils/date";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const foundation = new Date(`02/24/2022`);
  const today = new Date();

  return (
    <footer className="p-10 footer bg-base-200 text-base-content sticky top-[100vh]">
      <div>
        <Image
          className="mr-2 rounded-full"
          src="/images/logo.png"
          width="64"
          height="64"
          alt="La Crypta logo"
        />
        <p>
          <span className="text-lg font-semibold">La Crypta</span>
          <br />
          Consigli cripto da {days(foundation, today)} giorni
        </p>
      </div>

      <div className="md:ml-auto">
        <span className="footer-title">Community</span>
        <Link className="link link-hover" href="https://discord.gg/8RuJQGT8Rb">
          Discord
        </Link>
        <Link className="link link-hover" href="https://twitter.com/La__Crypta">
          Twitter
        </Link>
        <Link
          className="link link-hover"
          href="https://www.youtube.com/@lacrypta"
        >
          YouTube
        </Link>
      </div>

      <div className="md:ml-auto">
        <span className="footer-title">Contenuti</span>
        <Link className="link link-hover" href="/posts">
          Articoli
        </Link>
        <Link className="link link-hover" href="/podcast">
          Podcast
        </Link>
        <Link className="link link-hover" href="/disclamer">
          Disclamer
        </Link>
      </div>
    </footer>
  );
}
