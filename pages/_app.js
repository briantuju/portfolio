import Layout from "../components/Layout";
/* 
  The styles from globals.css apply to every page on
  our application
*/
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
