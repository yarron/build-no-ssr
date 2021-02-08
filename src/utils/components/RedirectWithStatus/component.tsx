import React, { FC, PropsWithChildren } from 'react';
import { Route, Redirect } from 'react-router';
import { RedirectWithStatusProps } from './types';

const RedirectWithStatus: FC<PropsWithChildren<RedirectWithStatusProps>> = ({ code = 301, ...props }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = code;
      }

      return <Redirect {...props} />;
    }}
  />
);

export default RedirectWithStatus;
