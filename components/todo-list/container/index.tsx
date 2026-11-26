import { TODO_CATEGORIES } from "../constants";
import { TodoListPresentation } from "../presentation";

export function TodoListContainer() {
  return <TodoListPresentation categories={TODO_CATEGORIES} />;
}
