import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-neutral-800">
      <nav className="container py-2 mx-auto">
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const NavLink = ({ href, children }) => {
  return (
    <Link
      className="hover:text-gray-300 hover:underline text-yellow-50"
      href={href}
    >
      {children}
    </Link>
  );
};
