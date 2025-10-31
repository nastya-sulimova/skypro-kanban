// import axios from "axios";

// const USER_URL = "https://wedev-api.sky.pro/api/user";

// // Функция для авторизации
// export async function loginUser({ login, password }) {
//   try {
//     const response = await axios.post(`${USER_URL}/login`, {
//       login,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }

// // Функция для регистрации
// export async function registerUser({ login, name, password }) {
//   try {
//     const response = await axios.post(USER_URL, {
//       login,
//       name,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || error.message);
//   }
// }



// в идеале:
// ЕСТЬ - получение задач из сервера - ЕСТЬ
// просмотр задач адекватный на основе данных из апи (слетели названия внутри карточек, категории и статусы)
// редактирование та же херня + запрос на редактирование карточки
// запрос на добавление задачи
// запрос на удаление задачи
// регистрация + авторизация
// пздц

