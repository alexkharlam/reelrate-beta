import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ratesActions } from "@/store/rates-slice";

import Header from "./Header";

function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const localRates = JSON.parse(localStorage.getItem("rates"));

    if (localRates) {
      dispatch(ratesActions.initRates(localRates));
    }
  }, []);

  return <Header />;
}

export default Layout;
