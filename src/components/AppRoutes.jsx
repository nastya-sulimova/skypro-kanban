import { Routes, Route } from "react-router-dom";
import CreateNewCardPage from "../pages/CreateNewCardPage";
import LogOutPage from "../pages/LogOutPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ViewAndEditCardPage from "../pages/ViewAndEditCardPage";
import { createGlobalStyle } from "styled-components";
import { Wrapper } from "./AppRoutes.styled";
import PrivateRoute from "./PrivateRoute";

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

const AppRoutes = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<MainPage />}>
              <Route path="/exit" element={<LogOutPage />} />
              <Route path="/card/add" element={<CreateNewCardPage />} />
              <Route path="/card/:id" element={<ViewAndEditCardPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default AppRoutes;
