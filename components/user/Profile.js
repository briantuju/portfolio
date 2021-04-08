import Image from "next/image";
import Link from "next/link";
import { env } from "../../utils/constants";

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
          Hey there. I&apos;m a software developer and I love coding.
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
