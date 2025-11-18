import { useContext, useState, useEffect, useCallback } from "react";
import { fetchTasks, postTask, updateTask, deleteTask } from "../services/api";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const loadTasks = useCallback(async () => {
    if (!user?.token) return;

    setLoading(true);
    try {
      const data = await fetchTasks({ token: user.token });
      setTasks(data || []);
    } catch (err) {
      setError(err.message);
      console.error("Ошибка загрузки задач", err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.token]);

  const addTask = async (newTaskData) => {
    try {
      const data = await postTask({ token: user.token, newTask: newTaskData });
      await loadTasks();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const editTask = async (taskId, updatedData) => {
    try {
      const data = await updateTask({
        token: user.token,
        _id: taskId,
        updatedData,
      });
      await loadTasks();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeTask = async (taskId) => {
    try {
      await deleteTask({ token: user.token, _id: taskId });
      await loadTasks();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        loadTasks,
        addTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
