import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import { Overlay } from "./LogOutPage";
import { Outlet } from "react-router-dom";
import { viewTask } from "../services/api";
import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteTask } from "../services/api";

const ViewAndEditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getTask = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      // Временно используем тестовый токен из документации
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

      const data = await viewTask({ token, _id: id });

      if (data) {
        setTask(data.task);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getTask();
  }, [getTask]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

      await deleteTask({ token, _id: id });
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <PopBrowse
        task={task}
        error={error}
        loading={loading}
        onDelete={handleDelete}
      />
      <Outlet />
    </Overlay>
  );
};

export default ViewAndEditCardPage;
