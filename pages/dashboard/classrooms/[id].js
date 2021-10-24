import React from "react";
import styles from "../../../styles/Classroom.module.css";

import { useRouter } from "next/router";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import ClassroomTable from "../../../components/classroom/classroomTable";

const ClassroomPage = () => {
  const router = useRouter();

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
          <Button ml='20px' w='150px' h='40px'>
            Сурагч нэмэх
          </Button>
        </div>

        {/* Table */}

        <ClassroomTable />
      </div>
    </Layout>
  );
};

export default ClassroomPage;
