import { createSlice } from "@reduxjs/toolkit";

const ratesSlice = createSlice({
  name: "rates",
  initialState: { rates: [] },
  reducers: {
    initRates(state, payload) {
      state.rates = payload.payload;
    },

    addRateToState(state, payload) {
      state.rates = payload.payload;
    },
    removeRateFromState(state, payload) {
      state.rates = state.rates.filter((rate) => rate.id !== payload.payload);
    },
  },
});

export const ratesActions = ratesSlice.actions;
export default ratesSlice;

export const addRate = function (rate) {
  return function (dispatch) {
    // getting local storage rates
    let existingRates = JSON.parse(localStorage.getItem("rates"));
    if (!existingRates) existingRates = [];
    // if it already a rate
    const previousRate = existingRates.findIndex(
      (movie) => movie.id === rate.id
    );
    if (previousRate !== -1) {
      existingRates[previousRate] = rate;
    } else {
      existingRates.unshift(rate);
    }

    // adding to local storage
    const ratesString = JSON.stringify(existingRates);
    localStorage.setItem("rates", ratesString);

    dispatch(ratesActions.addRateToState(existingRates));
  };
};

export const deleteRate = function (id) {
  return function (dispatch) {
    dispatch(ratesActions.removeRateFromState(id));

    let existingRates = JSON.parse(localStorage.getItem("rates"));
    const newRates = existingRates.filter((rate) => rate.id !== id);

    const ratesString = JSON.stringify(newRates);
    localStorage.setItem("rates", ratesString);
  };
};
