import { ButtonPresentation } from "@/components/commons/button/presentation";
import { TextInputPresentation } from "@/components/commons/text-input/presentation";
import styles from "./styles.module.css";

export function TaskComposerPresentation() {
  return (
    <form className={styles.composer} aria-label="Add a task">
      <TextInputPresentation name="task" placeholder="Write a task..." aria-label="Write a task" />
      <ButtonPresentation type="submit">Add</ButtonPresentation>
    </form>
  );
}
