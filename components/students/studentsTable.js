import React, { useState } from "react";
import styles from "../../styles/components/students/StudentsTable.module.css";

import Student from "./student";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const StudentsTable = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cell}>№</div>
        <div className={styles.cell}>Овог нэр</div>
        <div className={styles.cell}>Ирц</div>
        <div className={styles.cell}>Гэрийн даалгавар</div>
        <div className={styles.cell}>Шалгалт</div>
        <div className={styles.cell}>Хувийн Шалгалт</div>
        <div className={styles.cell}></div>
      </div>
      <div className={styles.students}>
        {a.map((_item, index) => (
          <Student
            selected={selected}
            setSelected={setSelected}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsTable;
