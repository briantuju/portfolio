import Head from "next/head";
import Profile from "../components/user/Profile";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Tuju</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />

      <div className="social">
        <h3 className="social__title">Follow me on social sites</h3>

        <div className="social__items">
          <a
            href="https://github.com/briantuju"
            className="social__items-item ion-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="logo-github" size="large" title="Follow on Github" />
          </a>

          <a
            href="https://twitter.com/omondi_tuju"
            className="social__items-item ion-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="logo-twitter" size="large" title="Follow on Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}
