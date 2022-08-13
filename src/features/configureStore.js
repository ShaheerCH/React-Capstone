import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './CountriesSlice';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;
