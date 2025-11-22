import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import { Overlay } from "./LogOutPage";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const CreateNewCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  const handleCreateTask = async (newTaskData) => {
    try {
      setLoading(true);
      setError("");
      await addTask(newTaskData);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при создании:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <PopNewCard error={error} loading={loading} onCreate={handleCreateTask} />
    </Overlay>
  );
};

export default CreateNewCardPage;
