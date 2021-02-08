import { CssBaseline } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import React, { FC, lazy, Suspense } from 'react';

import '@/theme/global.scss';
import { ROUTES } from '@/constants/routes';
import { LoadingCircle } from '@/ui';
import { Layout } from './Layout';

const HomePage = lazy(() => import('./Home'));
const NotFoundPage = lazy(() => import('./NotFound'));

const App: FC = () => (
  <>
    <CssBaseline />
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <Layout>
      <Suspense fallback={<LoadingCircle isLoading size={64} />}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Layout>
    <div
      id="portal-root"
      style={{
        width: 0,
        height: 0,
        visibility: 'hidden',
      }}
    />
  </>
);

export default App;
