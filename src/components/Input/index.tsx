type InputProps = {
  label: string;
  type: "email" | "text" | "number" | "date";
  placeholder?: string;
};

import styles from "./styles.module.scss";

export function Input({ label, type, placeholder }: InputProps) {
  return (
    <label className={styles.inputContainer}>
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  );
}
