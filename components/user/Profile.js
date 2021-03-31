import Image from "next/image";
import Button from "../Button";

const imageUrl = process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL;

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__details">
        <Image
          src={imageUrl}
          alt="Brian Tuju"
          width={400}
          height={300}
          className="profile__details--image"
        />

        <div className="profile__details--text">
          Hey there. I'm a software developer and I love coding.
        </div>
      </div>

      <div className="profile__cta">
        <Button>My Projects</Button>
      </div>
    </div>
  );
}
