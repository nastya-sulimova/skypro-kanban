import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateNewCardPage from "../pages/CreateNewCardPage";
import LogOutPage from "../pages/LogOutPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ViewAndEditCardPage from "../pages/ViewAndEditCardPage";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

/* CommonLink */
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`;

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainPage loading={loading} />}>
            <Route path="/exit" element={<LogOutPage />} />
            <Route path="/card/add" element={<CreateNewCardPage />} />
            <Route path="/card/:id" element={<ViewAndEditCardPage />} />
          </Route>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
    </>

    // {/* <PopUser    выход из аккаунта/>

    // <PopNewCard    созд новой/>

    // <PopBrowse   просмотр и ред/>

    // <Header />
    // <Main loading={loading} />        mainpage*/}
  );
};

export default AppRoutes;
