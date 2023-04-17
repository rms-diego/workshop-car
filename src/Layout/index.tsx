import { PropsWithChildren } from "react";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./styles.module.scss";

import { useLocation, useNavigate } from "react-router-dom";

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goBackPage = () => {
    switch (pathname) {
      case "/customer/generate-qrcode": {
        return navigate("/");
      }
    }
  };

  return (
    <div className={styles.container}>
      <main>
        {pathname !== "/" && (
          <FaArrowLeft
            className={styles.arrowLeft}
            size={30}
            onClick={() => goBackPage()}
          />
        )}

        {children}
      </main>
    </div>
  );
}
