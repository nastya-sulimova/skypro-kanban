import PopBrowseEdit from "../components/popups/PopBrowse/PopBrowseEdit";
import { OverlayEditPage } from "./LogOutPage";
import { viewTask } from "../services/api";
import { useCallback, useState, useEffect, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const EditCardPage = () => {
  const location = useLocation();
  const taskFromState = location.state?.task;

  const [localLoading, setLocalLoading] = useState(false);
  const [task, setTask] = useState(taskFromState || null);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const { editTask, removeTask } = useContext(TaskContext);

  const getTask = useCallback(async () => {
     if (taskFromState) {
      setTask(taskFromState);
      return;
    }

    try {
      setLocalLoading(true);
      setError("");

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      const data = await viewTask({ token, _id: id });

      if (data) {
        setTask(data.task);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);
      setError(err.message);
    } finally {
      setLocalLoading(false);
    }
  }, [id]);

  const handleSaveTask = async (updatedData) => {
    try {
      setLocalLoading(true);
      await editTask(id, updatedData);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      setError(err.message);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLocalLoading(true);
      await removeTask(id);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError(err.message);
    } finally {
      setLocalLoading(false);
    }
  };

  useEffect(() => {
    if (!task) {
      const timer = setTimeout(() => {
        getTask();
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [getTask, task]);

  if (localLoading && !task) {
    return (
      <OverlayEditPage>
        <div>Загрузка...</div>
      </OverlayEditPage>
    );
  }

  if (error && !task) {
    return (
      <OverlayEditPage>
        <div>Ошибка: {error}</div>
        <button onClick={() => navigate("/")}>На главную</button>
      </OverlayEditPage>
    );
  }

  if (!task) {
    return null;
  }

  return (
    <OverlayEditPage>
      <PopBrowseEdit
        task={task}
        error={error}
        loading={localLoading}
        onSave={handleSaveTask}
        onDelete={handleDelete}
      />
    </OverlayEditPage>
  );
};

export default EditCardPage;
