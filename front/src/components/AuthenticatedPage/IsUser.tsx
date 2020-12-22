import React, { useEffect, useState } from "react";

export const useIsUser = (fetchUser: any) => {
  const [user, setUser] = useState<any>(false);
  const token = localStorage.getItem("token");
  const fn = async () => {
    const value = await fetchUser();
    return value;
  };
  const returnUser = async () => {
    if (token) {
      const _value = await fn();
      if (_value) {
        setUser(true);
      } else {
        setUser(false);
      }
    } else {
      setUser(false);
    }
  };
  useEffect(() => {
    returnUser();
  }, []);
  return user;
};
