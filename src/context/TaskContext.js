import { createContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  loading: false,
  error: "",
  loadTasks: () => {},
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
});
