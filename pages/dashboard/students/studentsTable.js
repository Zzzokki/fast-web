import React from "react";
import styles from "../../../styles/components/StudentsTable.module.css";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const X = (props) => {
  return (
    <div className={`w100 flex`}>
      <div className={`${styles.number} ${styles.cell}`}>№</div>
      <div className={`${styles.fullname} ${styles.cell}`}>Овог нэр</div>
      <div className={`${styles.stat} ${styles.cell}`}>Ирц</div>
      <div className={`${styles.stat} ${styles.cell}`}>Гэрийн даалгавар</div>
      <div className={`${styles.stat} ${styles.cell}`}>Шалгалт</div>
      <div className={`${styles.stat} ${styles.cell}`}>Хувийн Шалгалт</div>
      <div className={`${styles.expand} ${styles.cell}`}></div>
    </div>
  );
};

const StudentsTable = () => {
  return (
    <div className={`f1 h100 ${styles.container}`}>
      <div className={`w100 flex ${styles.header}`}>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.number} ${styles.cell}`}
        >
          №
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.fullname} ${styles.cell}`}
        >
          Овог нэр
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.stat} ${styles.cell}`}
        >
          Ирц
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.stat} ${styles.cell}`}
        >
          Гэрийн даалгавар
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.stat} ${styles.cell}`}
        >
          Шалгалт
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.stat} ${styles.cell}`}
        >
          Хувийн Шалгалт
        </div>
        <div
          style={{ borderTop: "none" }}
          className={`${styles.expand} ${styles.cell}`}
        ></div>
      </div>
      <div className={`${styles.students}`}>
        {a.map((item) => (
          <X />
        ))}
      </div>
    </div>
  );
};

export default StudentsTable;
