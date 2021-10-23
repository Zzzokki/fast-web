import React from "react";
import styles from "../../../styles/components/StudentsTable.module.css";

import Row from "./row";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const StudentsTable = () => {
  return (
    <div className={`w100 ${styles.container}`}>
      <div className={`w100 ${styles.header}`}>
        <div className={`${styles.bgb} ${styles.wbr} ${styles.cell}`}>№</div>
        <div className={`${styles.bgb} ${styles.cell}`}>Овог нэр</div>
        <div className={`${styles.bbr} ${styles.cell}`}>Ирц</div>
        <div className={`${styles.bbr} ${styles.cell}`}>Гэрийн даалгавар</div>
        <div className={`${styles.bbr} ${styles.cell}`}>Шалгалт</div>
        <div className={`${styles.bbr} ${styles.cell}`}>Хувийн Шалгалт</div>
        <div className={`${styles.cell}`}></div>
        <div className={`${styles.bbl}`}></div>
      </div>
      <div className={`w100 ${styles.students}`}>
        {a.map((_item, index) => (
          <Row index={index} />
        ))}
      </div>
    </div>
  );
};

export default StudentsTable;
