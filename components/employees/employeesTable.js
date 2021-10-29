import React, { useState } from "react";
import styles from "../../styles/components/employees/EmployeesTable.module.css";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const titles = ["Овог нэр", "Төрсөн огноо", "Утас", "Имэйл", "Гэрийн хаяг"];

const EmployeesTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {titles.map((item) => (
          <div className={styles.cell}>{item}</div>
        ))}
      </div>
      <div className={styles.innerContainer}>
        {a.map((item) => (
          <div className={styles.row}>
            {titles.map((item) => (
              <div className={styles.cell}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesTable;
