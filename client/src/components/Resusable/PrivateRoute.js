import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
	isAuthenticated,
	redirectPath,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to={redirectPath} />
      )
    }
  />
);

export default PrivateRoute