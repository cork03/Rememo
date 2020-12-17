import { Route, Redirect } from "react-router-dom";
import React from "react";

export const TopAuth = ({ children, ...rest }: any) => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Route
        exact
        path="/"
        {...rest}
        render={({ location }) =>
          token ? (
            <Redirect
              to={{
                pathname: "/main",
              }}
            />
          ) : (
            children
          )
        }
      />
    </>
  );
};
