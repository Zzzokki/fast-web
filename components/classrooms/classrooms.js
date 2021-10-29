import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/components/classrooms/Classrooms.module.css";

const rows = [
  "Багш",
  "Хуваарь",
  "Анги",
  "Анги дүүргэлт",
  "Эхлэх хугацаа",
  "Дуусах хугацаа",
];

const Classrooms = (props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {rows.map((item) => (
          <div key={item} className={styles.row}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.innerContainer}>
        {props.data.map((item, index) => (
          <div
            key={`${index}`}
            onClick={() => {
              router.push("/dashboard/classrooms/1");
            }}
            style={{ borderTop: index > 0 && "1px solid rgba(0, 0, 0, 0.2)" }}
            className={styles.classroom}
          >
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
