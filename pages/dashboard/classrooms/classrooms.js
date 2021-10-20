import React from "react";
import styles from "../../../styles/components/Classrooms.module.css";

const rows = [
  "Багш",
  "Хуваарь",
  "Анги",
  "Анги дүүргэлт",
  "Эхлэх хугацаа",
  "Дуусах хугацаа",
];

const Classrooms = (props) => {
  return (
    <div className={styles.container}>
      <div className={`flex ${styles.header}`}>
        {rows.map((item) => (
          <div key={item} className={styles.row}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.innerContainer}>
        {props.data.map((item, index) => (
          <div key={`${index}`} className={styles.classroom}>
            {rows.map((item, index) => (
              <div key={`${index}`} className={styles.row}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classrooms;
