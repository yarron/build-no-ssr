import React from 'react';
import { createMemoryHistory } from 'history';
import {
  render,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  test('renders Layout component', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Layout />
      </Router>
      ,
    );
  });
});
