import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../axios";

const Authentication = createContext();

export const AuthContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const router = useRouter();

  const login = (email, password) => {
    axios
      .post(`/auth/login`, { email, password })
      .then(() => {
        setIsLoggedIn(true);
        router.push("/dashboard/classrooms");
      })
      .catch((err) => {
        console.log("ERROR: ", err.response.data.error.message);
      });
  };
  const logout = () => {
    axios
      .post(`/auth/logout`)
      .then(() => {
        setIsLoggedIn(false);
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log("ERROR: ", err.response.data.error.message);
      });
  };

  const check = () => {
    axios
      .post(`/auth`)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log("ERROR: ", err.response.data.error.message);
      });
  };

  useEffect(() => {
    check();
  }, []);

  if (isLoggedIn !== null) {
    return (
      <Authentication.Provider value={{ isLoggedIn, login,logout }}>
        {children}
      </Authentication.Provider>
    );
  }
  return <></>;
};

export default Authentication;
