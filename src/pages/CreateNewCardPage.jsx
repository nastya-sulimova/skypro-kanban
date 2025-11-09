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

      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

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