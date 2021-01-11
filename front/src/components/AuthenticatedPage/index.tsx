import { Redirect, Route, Switch } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import { useIsUser } from "../../hooks/useAuth";
import Main from "../../pages/MainPage";
import TopPage from "../../pages";

export const UserContext = createContext<any>("");

export const AuthenticatedPage = ({ children, fetchUser, ...rest }: any) => {
  const { user, ready, returnUser } = useIsUser(fetchUser);
  if (!ready) {
    return null;
  }
  return (
    <UserContext.Provider value={returnUser}>
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
    </UserContext.Provider>
  );
};
