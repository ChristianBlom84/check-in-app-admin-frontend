/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  const context = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        context && context.authStatus ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
