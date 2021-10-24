import React from "react";
import styles from "../styles/components/Sidebar.module.css";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div
        onClick={() => {
          router.push("/dashboard/classrooms");
        }}
        className={styles.button}
        style={{
          borderLeft:
            router?.asPath.split("/")[2] === "classrooms"
              ? "4px solid #fbb532"
              : "4px solid #000",
        }}
      >
        Ангиуд
      </div>
      <div
        onClick={() => {
          router.push("/dashboard/students");
        }}
        className={styles.button}
        style={{
          borderLeft:
            router?.asPath.split("/")[2] === "students"
              ? "4px solid #fbb532"
              : "4px solid #000",
        }}
      >
        Сурагчид
      </div>
    </div>
  );
};

export default Sidebar;
