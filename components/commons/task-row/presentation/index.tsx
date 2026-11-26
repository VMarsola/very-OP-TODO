import { CheckboxPresentation } from "@/components/commons/checkbox/presentation";
import styles from "./styles.module.css";

export interface TaskRowProps {
  title: string;
  completed?: boolean;
}

export function TaskRowPresentation({ title, completed = false }: TaskRowProps) {
  return (
    <div className={`${styles.row} ${completed ? styles.completed : ""}`}>
      <CheckboxPresentation checked={completed} label={title} />
      <span className={styles.title}>{title}</span>
    </div>
  );
}
