import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Classroom.module.css";

import { useRouter } from "next/router";

import AddStudent from "../../../modals/addStudent";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import Authentication from "../../../contexts/authContext";

import ClassroomTable from "../../../components/classroom/classroomTable";

const ClassroomPage = () => {
  const auth = useContext(Authentication);
  const [adding, setAdding] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn) router.push("/dashboard");
  }, []);

  if (auth.isLoggedIn) {
    return (
      <Layout>
        <div className={styles.container}>
          {/* Header */}

          <div className={styles.header}>
            <Button
              w='40px'
              h='40px'
              mr='20px'
              onClick={() => {
                router.push("/dashboard/classrooms");
              }}
            >{`<`}</Button>
            <div className={styles.classroom}></div>
            <Button
              onClick={() => {
                setAdding(true);
              }}
              ml='20px'
              w='150px'
              h='40px'
            >
              Сурагч нэмэх
            </Button>
          </div>

          {/* Table */}

          <ClassroomTable />
        </div>
        {adding && (
          <AddStudent
            close={() => {
              setAdding(false);
            }}
          />
        )}
      </Layout>
    );
  }
  return <></>;
};

export default ClassroomPage;
