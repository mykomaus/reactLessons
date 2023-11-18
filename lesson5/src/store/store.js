import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../services/countries";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesSlicerReducer } from "./countries/slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlicerReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);
