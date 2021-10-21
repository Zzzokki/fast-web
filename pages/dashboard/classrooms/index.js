import React from "react";
import styles from "../../../styles/Classrooms.module.css";
import Switcher from "../../../components/switcher";
import Classrooms from "./classrooms";

const ClassroomsPage = () => {
  return (
    <div className={`h100 w100 ${styles.container}`}>
      <Switcher options={["Хицээллэж буй ангиуд", "Төгссөн ангиуд"]} />
      <Classrooms data={["", "", "", "", "", "", "", "", "", "", "", ""]} />
    </div>
  );
};

export default ClassroomsPage;
