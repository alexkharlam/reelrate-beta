import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import store from "@/store/index";

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
    <Provider store={store}>
      {isLoading && <ProgressBar />}
      <Layout />
      <Component {...pageProps} />
    </Provider>
  );
}
