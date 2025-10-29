import { Link, useNavigate } from "react-router-dom";

import {
  LogWrapper,
  LogBox,
  LogTitle,
  LogForm,
  FormLinks,
  LogInput,
  LogInputBox,
  LogButton,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <LogWrapper>
      <LogBox>
        <LogTitle>{isSignUp ? "Регистрация" : "Вход"}</LogTitle>
        <LogForm action="#" id="form">
          <LogInputBox>
            {isSignUp && (
              <LogInput
                type="text"
                name="name"
                id="formname"
                placeholder="Имя"
              />
            )}
            <LogInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <LogInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
          </LogInputBox>

          <LogButton onClick={handleLogin}>
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </LogButton>

          {!isSignUp && (
            <FormLinks>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/register">Регистрируйтесть здесь</Link>
            </FormLinks>
          )}
          {isSignUp && (
            <FormLinks>
              <p>
                Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
              </p>
            </FormLinks>
          )}
        </LogForm>
      </LogBox>
    </LogWrapper>
  );
};

export default AuthForm;
