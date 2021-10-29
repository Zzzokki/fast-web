import React, { useEffect } from "react";
import { useAuth } from "../../../contexts/authContext";
import styles from "../../../styles/Halls.module.css";
import router from "next/router";

import Layout from "../../../layouts/layout";

const data = [
  "Танхим",
  "Танхим",
  "Танхим",
  "Танхим",
  "Танхим",
  "Танхим",
  "Танхим",
  "Танхим",
];

const HallsPage = () => {
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
            <p>Танхимууд</p>
          </div>
          <div className={styles.halls}>
            {data.map((item) => (
              <div
                onClick={() => {
                  router.push("/dashboard/schedule/1");
                }}
                className={styles.card}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
  return <></>;
};

export default HallsPage;
