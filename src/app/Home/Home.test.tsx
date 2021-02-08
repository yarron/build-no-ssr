import React, { lazy, Suspense } from 'react';
import {
  render,
} from '@testing-library/react';
import { LoadingCircle } from '@/ui';

const Home = lazy(() => import('./Home'));

describe('Home', () => {
  test('renders Home component', () => {
    render(
      <Suspense fallback={<LoadingCircle isLoading size={64} />}>
        <Home />
      </Suspense>,
    );
  });
});
