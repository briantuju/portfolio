import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>
              <Image src="/brian.jpg" width={50} height={40} />
            </a>
          </Link>
        </div>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/work">
          <a>Work</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  );
}
