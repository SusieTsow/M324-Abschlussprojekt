import axios from "axios";

const REACT_APP_API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api/todos";

export const getTodos = async () => {
  const response = await axios.get(REACT_APP_API_URL);
  return response.data;
};

export const addTodo = async (text) => {
  try {
    console.log("REACT_APP_API_URL:", REACT_APP_API_URL);
    const response = await axios.post(REACT_APP_API_URL, { title: text });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${REACT_APP_API_URL}/${id}`);
  return response.data;
};

export const toggleComplete = async (id) => {
  try {
    console.log("Toggling complete for ID:", id);
    const response = await axios.patch(`${REACT_APP_API_URL}/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error("Error toggling complete:", error);
    throw error;
  }
};
