import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brian Tuju</title>
      </Head>

      <h1 className={styles.title}>Brian Tuju's Portfolio</h1>

      <br />

      <Link href="/projects">
        <a className={styles.btn}>See my projects</a>
      </Link>
    </>
  );
}
