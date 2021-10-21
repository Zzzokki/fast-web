import React from "react";
import styles from "../../../styles/components/StudentsTable.module.css";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
