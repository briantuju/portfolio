import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Tuju</h1>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  );
}
