import React, { useEffect, useState } from "react";

export const useIsUser = (fetchUser: any) => {
  const [user, setUser] = useState<any>(null);
  const [ready, setReady] = useState<any>(false);

  const fn = async () => {
    const value = await fetchUser();
    return value;
  };
  const returnUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const _value = await fn();
      if (_value) {
        setUser(_value);
      } else {
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setReady(true);
  };
  useEffect(() => {
    returnUser();
  }, []);
  return { user, ready, returnUser };
};
