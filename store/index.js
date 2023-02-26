import { configureStore } from "@reduxjs/toolkit";

import ratesSlice from "./rates-slice";

const store = configureStore({
  reducer: { rates: ratesSlice.reducer },
});

export default store;
