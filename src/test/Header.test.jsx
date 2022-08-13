import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import  renderer  from 'react-test-renderer';
import { expect, it } from 'vitest';
import Header from '../components/Header/Header';

it('Renders the App Component', () => {
  const HeaderRenderer = renderer.create(
    <Router>
      <Header />
    </Router>
     ).toJSON();
  expect(HeaderRenderer).toMatchSnapshot()
})