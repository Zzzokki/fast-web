import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Login.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/authContext";

import logo from "../../assets/logo.png";

import Input from "../../components/input";
import Button from "../../components/button";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuth();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard/classrooms");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={300} height={300} src={logo} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <Input
            mb="16px"
            title="Имэйл"
            value={email}
            onChange={emailHandler}
          />
          <Input
            type="password"
            mb="16px"
            title="Нууц үг"
            value={password}
            onChange={passwordHandler}
          />
          <Button
            h="48px"
            mt="60px"
            onClick={() => {
              login(email, password);
            }}
          >
            Нэвтрэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
