import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Main from "../../pages/MainPage";

export const useMainComponent = (fetchUser: any) => {
  const [component, setComponet] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const value = fetchUser();
      if (value) {
        setComponet(<Main />);
      } else {
        setComponet(
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }
    } else {
      setComponet(
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      );
    }
  }, [fetchUser]);
  return component;
};
