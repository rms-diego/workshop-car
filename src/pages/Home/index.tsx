import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

import Layout from "@/Layout";
import logo from "@/assets/logo.png";

export function Home() {
  useEffect(() => {
    const users = localStorage.getItem("users");

    if (!users) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  return (
    <Layout>
      <>
        <img src={logo} alt="" className={styles.logo} />
        <Link to="/customer/generate-qrcode" className={styles.linkContainer}>
          <button>Cadastrar um cliente</button>
        </Link>

        <Link to="*" className={styles.linkContainer}>
          <button>Ler qr code do cliente</button>
        </Link>

        <Link to="*" className={styles.linkContainer}>
          <button>Todos serviços criados</button>
        </Link>
      </>
    </Layout>
  );
}
