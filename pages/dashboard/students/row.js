import React from "react";
import styles from "../../../styles/components/StudentsTable.module.css";

const Row = ({ index }) => {
  return (
    <div className={`w100 ${styles.row}`}>
      <div
        className={`${styles.bgb} ${styles.wbr} ${index !== 0 && styles.wbt} ${
          styles.cell
        }`}
      >
        {index + 1}
      </div>
      <div
        className={`${styles.bgb} ${index !== 0 && styles.wbt} ${styles.cell}`}
      >
        Овог нэр
      </div>
      <div
        className={`${styles.bbr} ${index !== 0 && styles.bbt} ${styles.cell}`}
      >
        Ирц
      </div>
      <div
        className={`${styles.bbr} ${index !== 0 && styles.bbt} ${styles.cell}`}
      >
        Гэрийн даалгавар
      </div>
      <div
        className={`${styles.bbr} ${index !== 0 && styles.bbt} ${styles.cell}`}
      >
        Шалгалт
      </div>
      <div
        className={`${styles.bbr} ${index !== 0 && styles.bbt} ${styles.cell}`}
      >
        Хувийн Шалгалт
      </div>
      <div className={`${index !== 0 && styles.bbt} ${styles.cell}`}></div>
    </div>
  );
};

export default Row;
