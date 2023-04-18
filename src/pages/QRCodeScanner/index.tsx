import styles from "./styles.module.scss";

import Layout from "@/Layout";

import { ChangeEvent, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export function QRCodeScanner() {
  const [qrCodeFile, setQrCodeFile] = useState<FileList>();
  const [customerIdDecodedQRCode, setCustomerIdDecodedQRCode] =
    useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const decodeQRCode = async () => {
      if (!qrCodeFile) return;

      const formData = new FormData();
      formData.append("file", qrCodeFile[0]);

      const response = await axios.post(
        "http://api.qrserver.com/v1/read-qr-code/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const customerIdFromDecodedQRCode: string =
        response.data[0].symbol[0].data;

      if (!customerIdFromDecodedQRCode) return alert("Invalid QRcode");

      setCustomerIdDecodedQRCode(customerIdFromDecodedQRCode);
    };

    decodeQRCode();
  }, [qrCodeFile]);

  const handleInputFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQrCodeFile(event.target.files!);
  };

  const handleClickCreateService = () => {
    if (!customerIdDecodedQRCode) return alert("Adicione um qr code");

    return navigate(`/service/${customerIdDecodedQRCode}`);
  };

  return (
    <Layout>
      <div className={styles.contentContainer}>
        <h1>QR Code Scanner</h1>

        <p>Coloque aqui o arquivo do qrcode</p>
        <input type="file" onChange={handleInputFileChange} />

        <button
          className={styles.createServiceButton}
          onClick={handleClickCreateService}
        >
          Criar atendimento
        </button>
      </div>
    </Layout>
  );
}
