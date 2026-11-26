import { PageHeadingPresentation } from "../../commons/page-heading/presentation";
import { TaskCategoryPresentation } from "../../commons/task-category/presentation";
import { TaskRowPresentation } from "../../commons/task-row/presentation";
import { TaskComposerPresentation } from "../../commons/task-composer/presentation";
import styles from "./styles.module.css";

export interface TodoListPresentationProps {
  categories: readonly {
    label: string;
    tasks: readonly string[];
  }[];
}

export function TodoListPresentation({
  categories,
}: TodoListPresentationProps) {
  return (
    <main className={styles.page}>
      <PageHeadingPresentation>Today</PageHeadingPresentation>

      <div className={styles.categories}>
        {categories.map((category) => (
          <TaskCategoryPresentation key={category.label} label={category.label}>
            {category.tasks.map((task) => (
              <TaskRowPresentation key={task} title={task} />
            ))}
          </TaskCategoryPresentation>
        ))}
      </div>

      <TaskComposerPresentation />
    </main>
  );
}
