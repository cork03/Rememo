import { Route } from "react-router-dom";
import React from "react";
import { useMainComponent } from "./test";

export const AuthenticatedPage = ({
  children,
  user,
  fetchUser,
  ...rest
}: any) => {
  const component = useMainComponent(fetchUser);
  return (
    <>
      <Route path="/main" render={() => component} />
    </>
  );
};
