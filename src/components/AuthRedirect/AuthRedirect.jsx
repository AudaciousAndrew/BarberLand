import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRedirect = ({
  path,
  child: ChildComponent,
  component: Component,
  isAuth,
  props
}) => {
  return (
    <Route
      path={path}
      render={routerProps => {
        console.log(isAuth);
        if (!isAuth) {
          return (
            <Component>
              <ChildComponent {...routerProps} {...props}/>
            </Component>
          );
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

export default AuthRedirect;
