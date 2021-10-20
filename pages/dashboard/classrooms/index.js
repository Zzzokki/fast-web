import React from "react";
import styles from "../../../styles/Classrooms.module.css";
import Sidebar from "../../../components/sidebar";
import Switcher from "../../../components/switcher";
import Classrooms from "./classrooms";

const ClassroomsPage = () => {
  return (
    <div className={`container flex`}>
      <Sidebar />
      <div className={`h100 f1 flex ${styles.container}`}>
        <Switcher options={["Хицээллэж буй ангиуд", "Төгссөн ангиуд"]} />
        <Classrooms data={["", "", "", "", "", "", "", "", "", "", "", ""]} />
      </div>
    </div>
  );
};

export default ClassroomsPage;
