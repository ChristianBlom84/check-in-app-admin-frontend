/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { UserRoles } from '../../context/authContext';

interface Props extends RouteProps {
  component: any;
}

const AdminRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  const context = useContext(AuthContext);

  return (
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
  );
};

export default AdminRoute;
