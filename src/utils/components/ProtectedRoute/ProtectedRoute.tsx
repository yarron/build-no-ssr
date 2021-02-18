import React, { FC, ComponentType, useEffect } from 'react';
import {
  Route, RouteProps, useHistory, useLocation,
} from 'react-router';
// import { ROUTES } from '@/constants/routes';

const ProtectedRoute: FC<RouteProps & { component: ComponentType }> = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // Auth.currentAuthenticatedUser()
    //   .then((user) => {
    //     const payload = user.getSignInUserSession().getIdToken().decodePayload();

    //     if (payload['cognito:groups'].length < 2) {
    //       throw new Error();
    //     } else if (location.pathname === ROUTES.HOME) {
    //       history.replace('/screener', location);
    //     } else if (!dataCache.auth.email) {
    //       addAuth({ variables: { email: payload.email, groups: payload['cognito:groups'] } });
    //     }
    //   })
    //   .catch(() => {
    //     history.replace(ROUTES.SIGN_IN, location);
    //   });
  }, [history, location]);

  return (
    <Route
      {...rest}
      component={Component}
    />
  );
};

export default ProtectedRoute;
