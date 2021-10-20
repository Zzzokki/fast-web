import React from "react";
import styles from "../../../styles/Students.module.css";

import Sidebar from "../../../components/sidebar";
import StudentsTable from "./studentsTable";

const StudentsPage = (props) => {
  return (
    <div className={`container flex`}>
      <Sidebar />
      <div className={`h100 flex f1 ${styles.container}`}>
        <StudentsTable />
      </div>
    </div>
  );
};

export default StudentsPage;
