/* eslint-disable arrow-body-style */

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncCountries = createAsyncThunk('countries/fetchAyncCountries', async () => {
  const countriesData = await axios.get('https://restcountries.com/v3.1/all');
  return countriesData.data;
});

export const fetchAsyncCountryDetail = createAsyncThunk('countries/fetchAyncCountryDetail', async (name) => {
  const countryData = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return countryData.data;
});

export const fetchSearchedCountryDetail = createAsyncThunk('countries/etchSearchedCountryDetail', async (term) => {
  const countryData = await axios.get(`https://restcountries.com/v3.1/name/${term}`);
  return countryData.data;
});

export const fetchSearchedContinents = createAsyncThunk('countries/etchSearchedContinents', async (term) => {
  const countryData = await axios.get(`https://restcountries.com/v3.1/region/${term}`);
  return countryData.data;
});

const initialState = {
  countries: [],
  selectedCountry: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCountries.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
    [fetchAsyncCountryDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedCountry: payload };
    },
    [fetchSearchedCountryDetail.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
    [fetchSearchedContinents.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
  },
});

export default countriesSlice.reducer;
export const getAllCountries = (state) => state.countries.countries;
export const getSelectedCountry = (state) => state.countries.selectedCountry;
