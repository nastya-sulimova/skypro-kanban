import PopNewCard from "../components/popups/PopNewCard/PopNewCard"
import { Overlay } from "./LogOutPage"
import { postTask } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNewCardPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");   
  const navigate = useNavigate();

  const handleCreateTask  = async (newTaskData) => {
    try {
      setLoading(true);
      setError("");

      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo?.token;

      await postTask({ token, newTask: newTaskData });

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
      <PopNewCard 
        error={error}
        loading={loading} 
        onCreate={handleCreateTask}/>
    </Overlay>
  )
}

export default CreateNewCardPage