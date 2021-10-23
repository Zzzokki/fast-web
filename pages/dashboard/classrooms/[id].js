import React from "react";
import styles from "../../../styles/Classroom.module.css";
import { useRouter } from "next/router";
import ClassroomTable from "./classroomTable";
import Button from "../../../components/button";

const rows = [
  "Багш",
  "Хуваарь",
  "Анги",
  "Анги дүүргэлт",
  "Эхлэх хугацаа",
  "Дуусах хугацаа",
];

const ClassroomPage = () => {
  const router = useRouter();

  return (
    <div className={`w100 h100 p20`}>
      <div className={`w100 flex ${styles.header}`}>
        <div
          onClick={() => {
            router.push("/dashboard/classrooms");
          }}
          className={styles.backButton}
        ></div>
        <div className={`${styles.classroom}`}>
          {rows.map((item, index) => (
            <div key={`${index}`} className={styles.row}>
              {item}
            </div>
          ))}
        </div>
        <div className={`${styles.addStudentButton}`}>
          <Button>Сурагч нэмэх</Button>
        </div>
      </div>
      <div className={`w100`}>
        <ClassroomTable />
      </div>
    </div>
  );
};

export default ClassroomPage;
