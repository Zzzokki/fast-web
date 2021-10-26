import React from "react";
import styles from "../../../styles/Students.module.css";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import Classroom from "../../../components/students/classroom";
import StudentsTable from "../../../components/students/studentsTable";

const StudentsPage = (props) => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Classrooms */}
        <div className={styles.classroomsContainer}>
          <div className={styles.header}>
            <p>Ангиуд</p>
            <Button w='24px' h='24px'>
              +
            </Button>
          </div>
          <div className={styles.classrooms}>
            <Classroom />
          </div>
        </div>

        {/* Table */}

        <StudentsTable />
      </div>
    </Layout>
  );
};

export default StudentsPage;
