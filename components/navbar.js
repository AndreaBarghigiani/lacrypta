import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" navbar bg-base-100">
      <div>
        <Link
          href="/"
          className="flex items-center text-xl normal-case btn btn-ghost"
        >
          <Image
            className="mr-2 rounded-full"
            src="/images/logo.png"
            width="24"
            height="24"
            alt="La Crypta logo"
          />
          La Crypta
        </Link>
      </div>

      <nav className="hidden ml-auto sm:block">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Blog</Link>
          </li>
          <li>
            <Link href="/podcast">Podcast</Link>
          </li>
          <li>
            <Link href="/disclamer">NFA &amp; DYOR</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link
              href="https://discord.gg/8RuJQGT8Rb"
              className="flex items-center"
            >
              <img src="https://discordapp.com/api/guilds/946525172578529310/widget.png?style=shield" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
