import React from "react";
import "../styles/globals.css";

import { AuthContainer } from "../contexts/authContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContainer>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </AuthContainer>
  );
};

export default MyApp;
