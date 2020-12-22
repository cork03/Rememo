import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import { useIsUser } from "./IsUser";
import Main from "../../pages/MainPage";
import TopPage from "../../pages";

export const AuthenticatedPage = ({ children, fetchUser, ...rest }: any) => {
  const user = useIsUser(fetchUser);
  debugger;
  return (
    <Switch>
      <Route
        exact
        path="/"
        {...rest}
        render={() => (user ? <Redirect to="/main" /> : <TopPage />)}
      />
      <Route
        path="/main"
        {...rest}
        render={() => (user ? <Main /> : <Redirect to="/" />)}
      />
    </Switch>
  );
};
