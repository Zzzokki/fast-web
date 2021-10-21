import React from "react";
import styles from "../styles/components/Sidebar.module.css";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={`h100 w100 ${styles.container}`}>
      <div
        onClick={() => {
          router.push("/dashboard/classrooms");
        }}
        className={styles.button}
      >
        Ангиуд
      </div>
      <div
        onClick={() => {
          router.push("/dashboard/students");
        }}
        className={styles.button}
      >
        Сурагчид
      </div>
    </div>
  );
};

export default Sidebar;
