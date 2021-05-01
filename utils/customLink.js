import Link from "next/link";
import PropTypes from "prop-types";

export default function CustomLink({ children, href }) {
  // https://dev.to/jameswallis/how-to-use-the-remark-markdown-converters-with-next-js-projects-a8a

  // If the link is local it will start with a "/"
  // Otherwise it'll be something like "https://"
  return href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  // https://stackoverflow.com/a/42122662/10203383
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
