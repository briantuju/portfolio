import Head from "next/head";
import Profile from "../components/user/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Tuju</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
    </div>
  );
}
