/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import Spinner from '../partials/Spinner';
import { AuthContext } from '../../context/authContext';
import { UserRoles } from '../../context/authContext';
import { checkCurrentUser } from '../../utils/CheckCurrentUser';

interface Props extends RouteProps {
  component: any;
}

const AdminRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  const context = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (context && !context.authStatus) {
      (async () => {
        const user = await checkCurrentUser();
        if (user && context) {
          context.setAuthStatus(true);
          context.setRole(user.role);
          setLoading(false);
        }
      })();
    } else {
      setLoading(false);
    }
  }, [context]);

  return context && !loading ? (
    <Route
      {...rest}
      render={routeProps =>
        context && context.authStatus && context.role === UserRoles.Admin ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  ) : null;
};

export default AdminRoute;
