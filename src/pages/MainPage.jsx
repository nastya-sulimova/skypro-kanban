import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const MainPage = () => {
  const { tasks, loading, error } = useContext(TaskContext);

  return (
    <>
      <Header />
      <Main tasks={tasks} error={error} loading={loading} />
      <Outlet />
    </>
  );
};

export default MainPage;  



