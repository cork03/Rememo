import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Main from "../../pages/MainPage";

export const useMainComponent = (fetchUser: any) => {
  const [component, setComponet] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fn = async () => {
      const value = await fetchUser();
      return value;
    };
    const returnComponent = async () => {
      if (token) {
        const _value = await fn();
        if (_value) {
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
    };
    returnComponent();
  }, [fetchUser]);
  return component;
};
