import React from 'react';
import { Provider } from 'react-redux';
import store from '../features/configureStore';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import Body from '../components/Body/Body';

it('Renders the App Component', () => {
  const BodyRenderer = renderer.create(
    <Provider store={store}>
      <Body />
    </Provider>
  ).toJSON();
  expect(BodyRenderer).toMatchSnapshot()
})