import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProgressBar from "@/components/ui/ProgressBar";
import { Provider } from "react-redux";
import store from "@/store/index";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoggingIn = router.route === "/profile/register" ? true : false;
  const [isLoading, setIsLoading] = useState(false);
  console.log(router);
  console.log(isLoggingIn);

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
      {!isLoggingIn && <Layout />}
      <Component {...pageProps} />
    </Provider>
  );
}
