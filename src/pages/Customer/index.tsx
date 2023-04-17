// import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/Layout";

import styles from "./styles.module.scss";

import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { CreateNewCustomerTypes } from "@/@types";

export function Customer() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<CreateNewCustomerTypes>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      carLicensePlate: "",
      carName: "",
      phoneNumber: "",
    },
  });

  const handleSubmitForm = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    carName,
    carLicensePlate,
  }: CreateNewCustomerTypes) => {
    const userId = uuid();

    let users = localStorage.getItem("users")!;

    users = JSON.parse(users);

    const newUser = {
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      carName,
      carLicensePlate,
    };

    const addUser = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(addUser));
    reset();

    return navigate(`/qr-code/${userId}`);
  };

  return (
    <Layout>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <label className={styles.inputContainer}>
          Nome do client
          <input type="text" placeholder="John" {...register("firstName")} />
        </label>

        <label className={styles.inputContainer}>
          Sobrenome do cliente
          <input type="text" placeholder="Doe" {...register("lastName")} />
        </label>

        <label className={styles.inputContainer}>
          Email do cliente
          <input
            type="email"
            placeholder="john.doe@email.com"
            {...register("email")}
          />
        </label>

        <label className={styles.inputContainer}>
          Telefone do cliente
          <input
            type="text"
            placeholder="00 0 00000 - 0000"
            {...register("phoneNumber")}
          />
        </label>

        <label className={styles.inputContainer}>
          Nome do carro
          <input type="text" placeholder="HB 20" {...register("carName")} />
        </label>

        <label className={styles.inputContainer}>
          Placa do carro
          <input type="text" {...register("carLicensePlate")} />
        </label>

        <button type="submit">Criar Qr code</button>
      </form>
    </Layout>
  );
}
