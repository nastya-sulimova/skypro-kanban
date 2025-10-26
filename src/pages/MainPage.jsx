import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";

const MainPage = ({loading}) => {
  return (
    <>
      <Header />
      <Main loading={loading} />
      <Outlet />
    </>
  );
};

export default MainPage;
