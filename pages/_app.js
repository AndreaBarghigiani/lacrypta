import { DefaultSeo } from "next-seo";

import "../styles/globals.css";
import SEO from "../next-seo.config";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
