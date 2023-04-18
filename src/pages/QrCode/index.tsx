import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Layout from "@/Layout";

import styles from "./styles.module.scss";

import QRCode from "qrcode";

export function QrCode() {
  const { pathname } = useLocation();
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const generateQRCode = async () => {
      const userId = pathname.split("/")[2];

      const QRCodeCreated = await QRCode.toDataURL(userId);
      setQrCode(QRCodeCreated);
    };

    generateQRCode();
  }, []);

  return (
    <Layout>
      <h1>Qr Code criado</h1>
      <img src={qrCode} className={styles.QRCode} />
      <a href={qrCode} download="qrcode.png" className={styles.downloadButton}>
        <button>Download Qr code</button>
      </a>
    </Layout>
  );
}
