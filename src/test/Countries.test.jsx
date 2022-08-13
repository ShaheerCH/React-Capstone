import React from 'react';
import { Provider } from 'react-redux';
import store from '../features/configureStore';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import Countries from '../components/Countries/Countries';

it('Renders the App Component', () => {
  const CountriesRenderer = renderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>
  ).toJSON();
  expect(CountriesRenderer).toMatchSnapshot()
})