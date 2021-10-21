import React from "react";
import styles from "../../../styles/Students.module.css";

import Sidebar from "../../../components/sidebar";
import StudentsTable from "./studentsTable";

const StudentsPage = (props) => {
  return (
    <div className={`h100 w100 ${styles.container}`}>
      <StudentsTable />
    </div>
  );
};

export default StudentsPage;
