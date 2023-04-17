import { FormEvent } from "react";
import Layout from "@/Layout";

import { Input } from "@/components/Input";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export function Customer() {
  const navigate = useNavigate();

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    navigate("/qr-code/test");
  };

  return (
    <Layout>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <Input label="Nome do cliente" type="text" placeholder="John Doe" />

        <Input
          label="Email do client"
          type="email"
          placeholder="john.doe@email.com"
        />

        <Input
          label="Telefone do cliente"
          type="text"
          placeholder="00 0 00000 - 0000"
        />

        <Input label="Nome do carro" type="text" placeholder="HB 20" />
        <Input label="Placa do carro" type="text" />

        <button type="submit">Criar Qr code</button>
      </form>
    </Layout>
  );
}
