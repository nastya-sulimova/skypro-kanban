import PopBrowseEdit from "../components/popups/PopBrowse/PopBrowseEdit";
import { OverlayEditPage } from "./LogOutPage";
import { updateTask, viewTask, deleteTask } from "../services/api";
import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getTask = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

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

  const handleSaveTask = async (updatedData) => {
    try {
      setLoading(true);
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

      await updateTask({ token, _id: id, updatedData });

      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
    <OverlayEditPage>
      <PopBrowseEdit
        task={task}
        error={error}
        loading={loading}
        onSave={handleSaveTask}
        onDelete={handleDelete}
      />
    </OverlayEditPage>
  );
};

export default EditCardPage;
