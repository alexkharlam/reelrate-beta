import { useDispatch, useSelector } from "react-redux";
import RatesList from "@/components/rates/RatesList";

function RatesPage() {
  const rates = useSelector((state) => state.rates.rates);

  return <RatesList rates={rates} />;
}

export default RatesPage;
