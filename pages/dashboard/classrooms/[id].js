import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Classroom.module.css";
import { useAuth } from "../../../contexts/authContext";
import { useRouter } from "next/router";

import { BsChevronLeft } from "react-icons/bs";

import AddStudent from "../../../modals/addStudent";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import ClassroomTable from "../../../components/classroom/classroomTable";

const ClassroomPage = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);

  if (isLoggedIn) {
    return (
      <Layout>
        <div className={styles.container}>
          {/* Header */}

          <div className={styles.header}>
            <Button
              w="40px"
              h="40px"
              mr="20px"
              onClick={() => {
                router.push("/dashboard/classrooms");
              }}
            >
              <BsChevronLeft style={{ width: 20, height: 20 }} />
            </Button>
            <div className={styles.classroom}></div>
            <Button
              onClick={() => {
                setAdding(true);
              }}
              ml="20px"
              w="150px"
              h="40px"
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
