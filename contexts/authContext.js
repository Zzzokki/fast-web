import React, { createContext } from "react";

const Authentication = createContext();

export const AuthContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Authentication.Provider value={(isLoggedIn, setIsLoggedIn)}>
      {children}
    </Authentication.Provider>
  );
};

export default Authentication;
