import React, { lazy, Suspense } from 'react';
import {
  render,
} from '@testing-library/react';
import { LoadingCircle } from '@/ui';

const NotFound = lazy(() => import('./NotFound'));

describe('NotFound', () => {
  test('renders NotFound component', () => {
    render(
      <Suspense fallback={<LoadingCircle isLoading size={64} />}>
        <NotFound />
      </Suspense>,
    );
  });
});
