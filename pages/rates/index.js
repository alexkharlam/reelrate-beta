import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import RatesList from "@/components/rates/RatesList";

function RatesPage() {
  const rates = useSelector((state) => state.rates.rates);

  return (
    <>
      <Head>
        <title>Your rates — ReelRate</title>
      </Head>
      <RatesList rates={rates} />;
    </>
  );
}

export default RatesPage;
