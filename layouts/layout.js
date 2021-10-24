import React from "react";
import styles from "../styles/layouts/Layout.module.css";

import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default Layout;
