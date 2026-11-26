import type { ReactNode } from "react";
import styles from "./styles.module.css";

export interface TaskCategoryProps {
  label: string;
  children: ReactNode;
}

export function TaskCategoryPresentation({ label, children }: TaskCategoryProps) {
  return (
    <section className={styles.category} aria-label={`${label} tasks`}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.tasks}>{children}</div>
    </section>
  );
}
