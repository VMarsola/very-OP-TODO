import type { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputPresentation({
  className = "",
  ...props
}: TextInputProps) {
  return <input className={`${styles.input} ${className}`} {...props} />;
}
