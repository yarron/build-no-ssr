import React, { FC, PropsWithChildren } from 'react';
import { Route } from 'react-router';
import { HttpStatusProps } from './types';

const HttpStatus: FC<PropsWithChildren<HttpStatusProps>> = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = code;
      }

      return children;
    }}
  />
);

export default HttpStatus;
