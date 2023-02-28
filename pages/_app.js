import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import store from "@/store/index";
import Head from "next/head";

import ProgressBar from "@/components/ui/ProgressBar";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="ReelRate - search for millions of movies and keep the rates about them in a simple way"
        />
        <title>ReelRate — search and rate movies</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
      </Head>
      <Provider store={store}>
        {isLoading && <ProgressBar />}
        <Layout />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
