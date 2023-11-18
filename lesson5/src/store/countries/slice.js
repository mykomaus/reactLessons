import { createSlice } from "@reduxjs/toolkit";
import { countryApi } from "../../services/countries";

const initialState = {
  countries: [],
  country: null,
  translation: null,
};
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountry(state, { payload }) {
      if (payload) {
        state.country = state.countries.find(
          (item) => item.name.official === payload
        );
      } else if (state.countries.length) {
        state.country = state.countries[0];
      }
    },
    setTranslation(state, { payload }) {
      if (payload) {
        state.translation = payload;
      }
    },
    deleteCountry(state, { payload }) {
      if (payload) {
        state.countries = state.countries.filter(
          (country) => country.name.official !== payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      countryApi.endpoints.getAllCountries.matchFulfilled,
      (state, { payload }) => {
        state.countries = payload;
      }
    );
  },
});

export const { setCountry, setTranslation, deleteCountry } =
  countriesSlice.actions;
export const countriesSlicerReducer = countriesSlice.reducer;
