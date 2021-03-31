import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__item--link">Home</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link href="/projects">
              <a className="nav__item--link">Projects</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link href="/contact">
              <a className="nav__item--link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
