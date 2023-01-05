import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, bsc, avalanche } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { ALCHEMY_API_KEY: alchemy_key } = process.env;

const { chains, provider } = configureChains(
  [mainnet, polygon, bsc, avalanche],
  [alchemyProvider({ apiKey: alchemy_key }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "La Crypta Connector",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

import { DefaultSeo } from "next-seo";

import "../styles/globals.css";
import SEO from "../next-seo.config";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#DC944C",
        })}
      >
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
