import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function viewTask({ token, _id }) {
  try {
    const response = await axios.get(`${API_URL}/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateTask({ token, _id, updatedData }) {
    try {
      const response = await axios.put(`${API_URL}/${_id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": '',
        },
      });
      return response.data.tasks;
    } catch (error) {
      throw new Error(error.message);
    }
  }
