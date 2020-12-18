import { Redirect, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useMainComponent } from "./test";
import Main from "../../pages/MainPage";

export const AuthenticatedPage = ({ children, user, ...rest }: any) => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    </>
  );
};
