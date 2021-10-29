import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Schedule.module.css";
import { useAuth } from "../../../contexts/authContext";
import { useRouter } from "next/router";

import { BsChevronLeft } from "react-icons/bs";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import ScheduleTable from "../../../components/schedule/scheduleTable";

const Schedule = () => {
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
                router.push("/dashboard/schedule");
              }}
            >
              <BsChevronLeft style={{ width: 20, height: 20 }} />
            </Button>
            <p className={styles.title}>Хичээлийн хуваарь</p>
          </div>

          {/* Table */}

          <ScheduleTable />
        </div>
        {/* {adding && (
          <AddStudent
            close={() => {
              setAdding(false);
            }}
          />
        )} */}
      </Layout>
    );
  }
  return <></>;
};

export default Schedule;
