import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
