import axios from "axios";

const USER_URL = "https://wedev-api.sky.pro/api/user";

export async function loginUser({ login, password }) {
  try {
    const data = await axios.post(
      `${USER_URL}/login`,
      {
        login,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function registerUser({ login, name, password }) {
  try {
    const data = await axios.post(
      USER_URL,
      {
        login,
        name,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

