import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// export const LogInUpButton = styled.button`
  
// `

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div className="bg">
      <div className="modal">
        <div className="wrapper">
          <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
          <form action="#" id="form" className="form">
            <div className="input-wrapper">
              {isSignUp && (
                <input
                  tag="input"
                  className="auth-input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <input
                tag="input"
                className="auth-input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </div>

            <button
              onClick={handleLogin}
              type="secondary"
              fullwidth="true"
              className="button-enter"
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            >{isSignUp ? "Зарегистрироваться" : "Войти"}</button>
            {!isSignUp && (
                <div className="form-group">
                    <p>Нужно зарегистрироваться?</p>
                    <Link to='/register'>Регистрируйтесть здесь</Link>
                </div>
            )}
            {isSignUp && (
                <div className="form-group">
                    <p>
                        Уже есть аккаунт? <Link to='/login'>Войдите здесь</Link>
                    </p>
                </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
