import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import { Overlay } from "./LogOutPage";
import { Outlet } from "react-router-dom";
import { viewTask } from "../services/api";
import { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewAndEditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");

  const {id} = useParams();

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

  return (
    <Overlay>
      <PopBrowse task={task} error={error} loading={loading} />
      <Outlet />
    </Overlay>
  );
};

export default ViewAndEditCardPage;
