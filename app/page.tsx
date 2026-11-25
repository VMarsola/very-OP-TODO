import styles from "./page.module.css";
import { PageHeading } from "@/components/op-todo/page-heading";
import { TaskCategory } from "@/components/op-todo/task-category";
import { TaskRow } from "@/components/op-todo/task-row";
import { TaskEntry } from "@/components/op-todo/task-entry";

export default function Home() {
  return (
    <main className={styles.page}>
      <PageHeading>Today</PageHeading>

      <div className={styles.categories}>
        <TaskCategory label="Design">
          <TaskRow title="Create icons for a dashboard" />
          <TaskRow title="Prepare a design presentation" />
        </TaskCategory>

        <TaskCategory label="Personal">
          <TaskRow title="Stretch for 15 minutes" />
          <TaskRow title="Plan your meal" />
          <TaskRow title="Review daily goals before sleeping. Add some new if time permits" />
        </TaskCategory>

        <TaskCategory label="House">
          <TaskRow title="Water indoor plants" />
        </TaskCategory>
      </div>

      <TaskEntry />
    </main>
  );
}
