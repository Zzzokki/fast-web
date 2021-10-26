import React, { useState } from "react";
import styles from "../../../styles/Classrooms.module.css";

import Layout from "../../../layouts/layout";

import Button from "../../../components/button";
import Switcher from "../../../components/switcher";
import Classrooms from "../../../components/classrooms/classrooms";
import AddClassroom from "../../../modals/addClassroom";

const ClassroomsPage = () => {
  const [status, setStatus] = useState(0);
  const [adding, setAdding] = useState(false);

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
          <Button
            onClick={() => {
              setAdding(true);
            }}
            h='40px'
            w='160px'
          >
            Анги нэмэх
          </Button>
        </div>
        <Classrooms data={["", "", "", "", "", "", "", "", "", "", "", ""]} />
      </div>
      {adding && <AddClassroom close={() => setAdding(false)} />}
    </Layout>
  );
};

export default ClassroomsPage;
