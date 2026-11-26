import type { ReactNode } from "react";
import styles from "./styles.module.css";

export interface PageHeadingProps {
  children: ReactNode;
}

export function PageHeadingPresentation({ children }: PageHeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
