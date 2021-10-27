import React, { useContext, useEffect } from "react";
import styles from "../../../styles/Students.module.css";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import Classroom from "../../../components/students/classroom";
import StudentsTable from "../../../components/students/studentsTable";

import { useRouter } from "next/router";
import Authentication from "../../../contexts/authContext";

const StudentsPage = (props) => {
  const router = useRouter();
  const auth = useContext(Authentication);

  useEffect(() => {
    console.log(auth.isLoggedIn);
    if (!auth.isLoggedIn) router.push("/dashboard");
  }, []);

  if (auth.isLoggedIn) {
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
  }
  return <></>;
};

export default StudentsPage;
