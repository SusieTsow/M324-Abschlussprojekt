import axios from "axios";

const API_URL = "http://localhost:5001/api/todos";

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (text) => {
  try {
    console.log("API URL:", API_URL);
    const response = await axios.post(API_URL, { title: text });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const toggleComplete = async (id) => {
  try {
    console.log("Toggling complete for ID:", id);
    const response = await axios.patch(`${API_URL}/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error("Error toggling complete:", error);
    throw error;
  }
};
