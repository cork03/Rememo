import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";

export const TopAuth = ({ children, ...rest }: any) => {
  const token = localStorage.getItem("token");
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/main" />
    </Switch>
  );
};
