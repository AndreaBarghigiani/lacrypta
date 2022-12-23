import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
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

      <nav className="flex-none">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
