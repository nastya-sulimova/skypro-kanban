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

import { useContext, useState } from "react";
import { loginUser, registerUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const {updateUserInfo} = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  })

  const [error, setError] = useState('');

  const validateForm = () => {
    const newErrors = {name: false, login: false, password: false,};
    let isValid = true;

    if(isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError('Заполните все поля');

      isValid = false;
    }

    if(!formData.login.trim()) {
      newErrors.login = true;
      setError('Заполните все поля');

      isValid = false;
    }

    if(!formData.password.trim()) {
      newErrors.password = true;
      setError('Заполните все поля');

      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
    setErrors({...errors, [name]: false});
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
      ? await loginUser({login: formData.login, password: formData.password})
      : await registerUser ({login: formData.login, password: formData.password, name: formData.name});

      if (data) {
        updateUserInfo(data);
        navigate('/');
      }
    } catch (err) {
      setError (err.message);
    }
  }

  return (
    <LogWrapper>
      <LogBox>
        <LogTitle>{isSignUp ? "Регистрация" : "Вход"}</LogTitle>

        {error && (
        <div style={{ 
          color: 'red', 
          fontSize: '14px', 
          textAlign: 'center',
          marginBottom: '10px'
        }}>
          {error}
        </div>
      )}

        <LogForm id="form" onSubmit={handleSubmit}>
          <LogInputBox>
            {isSignUp && (
              <LogInput
                $error={errors.name}
                type="text"
                name="name"
                id="formname"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
            )}
            <LogInput
              $error={errors.login}
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
            />
            <LogInput
              $error={errors.password}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
          </LogInputBox>

          <LogButton >
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </LogButton>

          {!isSignUp && (
            <FormLinks>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/register" style={{textDecoration: "underline"}}>Регистрируйтесть здесь</Link>
            </FormLinks>
          )}
          {isSignUp && (
            <FormLinks>
              <p>
                Уже есть аккаунт? <Link to="/login" style={{textDecoration: "underline"}}>Войдите здесь</Link>
              </p>
            </FormLinks>
          )}
        </LogForm>
      </LogBox>
    </LogWrapper>
  );
};

export default AuthForm;
