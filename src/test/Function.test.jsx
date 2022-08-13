import { fetchAsyncCountries, fetchSearchedCountryDetail, fetchAsyncCountryDetail } from '../features/CountriesSlice';

it('fetchAsyncCountries should return a promise', () => {
  expect(fetchAsyncCountries()).toEqual(expect.any(Function));
});

it('fetchSearchedCountryDetail should return a promise', () => {
  expect(fetchSearchedCountryDetail()).toEqual(expect.any(Function));
});

it('fetchAsyncCountryDetail should return a promise', () => {
  expect(fetchAsyncCountryDetail()).toEqual(expect.any(Function));
});
