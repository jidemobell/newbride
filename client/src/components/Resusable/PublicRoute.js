import React from "react";
import { Route } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      <div>
        <Component {...props} />
      </div>
    )}
  />
);

export default PublicRoute;
