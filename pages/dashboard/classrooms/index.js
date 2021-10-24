import React, { useState } from "react";
import styles from "../../../styles/Classrooms.module.css";

import Layout from "../../../layouts/layout";

import Switcher from "../../../components/switcher";
import Classrooms from "../../../components/classrooms/classrooms";

const ClassroomsPage = () => {
  const [status, setStatus] = useState(0);

  const changeStatus = () => {
    setStatus((prev) => 1 - prev);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Switcher
            onClick={changeStatus}
            value={status}
            options={["Хицээллэж буй ангиуд", "Төгссөн ангиуд"]}
          />
        </div>
        <Classrooms data={["", "", "", "", "", "", "", "", "", "", "", ""]} />
      </div>
    </Layout>
  );
};

export default ClassroomsPage;
