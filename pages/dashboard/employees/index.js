import React, { useEffect } from "react";
import { useAuth } from "../../../contexts/authContext";
import { useRouter } from "next/router";
import styles from "../../../styles/Employees.module.css";

import Layout from "../../../layouts/layout";
import Button from "../../../components/button";

import EmployeesTable from "../../../components/employees/employeesTable";

const EmployeesPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

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
            <p className={styles.title}>Багш нар</p>
            <Button h="40px" w="160px">
              Багш нэмэх
            </Button>
          </div>
          <EmployeesTable />
        </div>
      </Layout>
    );
  }
  return <></>;
};

export default EmployeesPage;
