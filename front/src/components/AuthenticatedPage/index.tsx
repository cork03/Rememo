import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import { useMainComponent } from "./ReturnMain";

export const AuthenticatedPage = ({
  children,
  user,
  fetchUser,
  ...rest
}: any) => {
  const path = "/main";
  const component = useMainComponent(fetchUser, path);
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => component} />
        <Route path="/main" render={() => component} />
      </Switch>
    </>
  );
};
