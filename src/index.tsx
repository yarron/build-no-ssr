import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import App from '@/app';
import theme from '@/theme';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import client from './graphql';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client as ApolloClient<unknown>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
