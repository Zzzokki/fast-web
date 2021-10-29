import React from "react";
import styles from "../styles/components/Sidebar.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/authContext";
import Image from "next/image";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <Image width={100} height={100} src={logo} />
        </div>
        <div className={styles.employee}>
          <p className={styles.role}>Багш</p>
          <p className={styles.name}>Мөнхтүшиг</p>
        </div>
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
        <div
          onClick={() => {
            router.push("/dashboard/employees");
          }}
          className={styles.button}
          style={{
            borderLeft:
              router?.asPath.split("/")[2] === "employees"
                ? "4px solid #fbb532"
                : "4px solid #000",
          }}
        >
          Багш нар
        </div>
        <div
          onClick={() => {
            router.push("/dashboard/schedule");
          }}
          className={styles.button}
          style={{
            borderLeft:
              router?.asPath.split("/")[2] === "schedule"
                ? "4px solid #fbb532"
                : "4px solid #000",
          }}
        >
          Хуваарь
        </div>
      </div>
      <div onClick={logout} className={styles.button}>
        Гарах
      </div>
    </div>
  );
};

export default Sidebar;
