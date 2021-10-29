import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/authContext";
import styles from "../../../styles/Classrooms.module.css";
import router from "next/router";

import Layout from "../../../layouts/layout";

import Button from "../../../components/button";
import Switcher from "../../../components/switcher";
import Classrooms from "../../../components/classrooms/classrooms";
import AddClassroom from "../../../modals/addClassroom";

const ClassroomsPage = () => {
  const { isLoggedIn } = useAuth();
  const [status, setStatus] = useState(0);
  const [adding, setAdding] = useState(false);

  const changeStatus = () => {
    setStatus((prev) => 1 - prev);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);

  if (isLoggedIn) {
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
              h="40px"
              w="160px"
            >
              Анги нэмэх
            </Button>
          </div>
          <Classrooms data={["", "", "", "", "", "", "", "", "", "", "", ""]} />
        </div>
        {adding && <AddClassroom close={() => setAdding(false)} />}
      </Layout>
    );
  }
  return <></>;
};

export default ClassroomsPage;
