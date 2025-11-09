import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";

const MainPage = ({setIsAuth}) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation(); // ← добавляем

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      
      // Временно используем тестовый токен из документации
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

      const data = await fetchTasks({ token });
      
      if (data) {
        setTasks(data);
      }
    } catch (err) {
      console.error("Ошибка при загрузке:", err);
      setError("Ошибка загрузки. Обновите страницу или попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }, []);

useEffect(() => {
  getTasks();
}, [getTasks]);

useEffect(() => {
  if (location.pathname === '/') {
    getTasks();
  }
}, [location.pathname, getTasks]);

  return (
    <>
      <Header />
      <Main tasks={tasks} error={error} loading={loading} />
      <Outlet />
    </>
  );
};

export default MainPage;



