import React from "react";
import styles from "../../../styles/components/ClassroomTable.module.css";

const ClassroomTable = () => {
  return (
    <div className={`h100 w100 ${styles.container}`}>
      <div className={`w100 flex ${styles.header}`}>
        <div></div>
        <div className={`flex f1`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomTable;
