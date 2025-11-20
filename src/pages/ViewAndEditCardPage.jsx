import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import { Overlay } from "./LogOutPage";
// import { Outlet } from "react-router-dom";
import { viewTask } from "../services/api";
import { useCallback, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const ViewAndEditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");

  // const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { editTask, removeTask } = useContext(TaskContext);

  const getTask = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      const data = await viewTask({ token, _id: id });

      if (data) {
        setTask(data.task);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);

      if (err.message.includes("404")) {
        navigate("/");
        return;
      }

      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getTask();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [getTask]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await removeTask(id);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTask = async (updatedData) => {
    try {
      setLoading(true);
      await editTask(id, updatedData);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !task) {
    return (
      <Overlay>
        <div>Загрузка...</div>
      </Overlay>
    );
  }

  if (error && !task) {
    return (
      <Overlay>
        <div>Ошибка: {error}</div>
        <button onClick={() => navigate("/")}>На главную</button>
      </Overlay>
    );
  }

  if (!task) {
    return null;
  }

  return (
    <Overlay>
      <PopBrowse
        task={task}
        // error={error}
        // loading={loading}
        // isEdit={isEdit}
        onDelete={handleDelete}
        onSave={handleSaveTask}
      />
      {/* <Outlet /> */}
    </Overlay>
  );
};

export default ViewAndEditCardPage;
