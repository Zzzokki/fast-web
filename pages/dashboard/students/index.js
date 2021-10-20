import React from "react";
import styles from "../../../styles/Students.module.css";

import Sidebar from "../../../components/sidebar";

const StudentsPage = (props) => {
  return (
    <div className={`container flex`}>
      <Sidebar />
      <div className={`h100 f1 ${styles.container}`}></div>
    </div>
  );
};

export default StudentsPage;
