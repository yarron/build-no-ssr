const config = {
  graphql: {
    // url: process.env.REACT_APP_AWS_ENDPOINT as string,
    // region: process.env.REACT_APP_AWS_REGION as string,
    // auth: {
    //   type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    //   // jwtToken: async () => (await AuthAWS.currentSession()).getIdToken().getJwtToken(),
    // },
  },
  app: {
    cache: false,
  },
  hex: '418f721a2f6f891cd64e85fc8fe8d0e4491734d564',
  fullHost: 'https://api.shasta.trongrid.io',
};

export default config;
