import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";
import Image from "next/image";
import Link from "next/link";
import { env } from "../../utils/constants";
import customLink from "../../utils/customLink";

const markdown = `
💻️ \`Software Developer\` 🖥️

---
I'm a software developer with **over 2 years**
building impactful software, except when I'm hungry 😔️.

My tech stack include **JavaScript**, **React**, **Python**, **PHP/MySQL**
and other's I'm afraid to mention 😂️.
`;

const MarkdownText = () => {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: customLink,
      },
    })
    .processSync(markdown).result;

  return <> {content} </>;
};

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__details">
        <Image
          src={env.imageUrl}
          alt="Brian Tuju"
          width={400}
          height={300}
          className="profile__details--image"
        />

        <div className="profile__details--text">
          <MarkdownText />
        </div>
      </div>

      <div className="profile__cta">
        <Link href="/projects">
          <a className="btn--link">My Projects</a>
        </Link>
      </div>
    </div>
  );
}
