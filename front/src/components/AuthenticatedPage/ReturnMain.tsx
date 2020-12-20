import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Main from "../../pages/MainPage";
import { HomePage } from "../templetes";

export const useMainComponent = (fetchUser: any, path: string) => {
  const [component, setComponet] = useState<any>(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fn = async () => {
      const value = await fetchUser();
      return value;
    };

    if (path === "/") {
      const returnComponent = async () => {
        if (token) {
          const _value = await fn();
          if (_value) {
            setComponet(
              <Redirect
                to={{
                  pathname: "/main",
                }}
              />
            );
          } else {
            setComponet(<HomePage />);
          }
        } else {
          setComponet(<HomePage />);
        }
      };
      returnComponent();
    }

    if (path === "/main") {
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
    }
  }, []);
  return component;
};
