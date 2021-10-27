import React, { useContext } from "react";
import styles from "../styles/components/Sidebar.module.css";
import { useRouter } from "next/router";
import Authentication from "../contexts/authContext";

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useContext(Authentication);

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
      <div onClick={logout} className={styles.button}>
        Гарах
      </div>
    </div>
  );
};

export default Sidebar;
