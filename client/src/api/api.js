import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL || 5000

export const getItems = async () => {

  try {
    const items = await axios.get(`${VITE_API_URL}/items`);
    return items.data.items;
  } catch (err) {
    console.log(err);
  }
};

export const guardarItem = async (data) => {
  try {
    const item = await axios.post(`${VITE_API_URL}/items`, data);
    console.log(item);
  } catch (err) {
    console.log(err);
  }
}

export const editarItem = async (data) => {
  try {
    return await axios.put(`${VITE_API_URL}/items/${data.id}`, data);
  } catch (err) {
    console.log(err);
  }
}

export const eliminarItem = async (id) => {
  try {
    const data = await axios.delete(`${VITE_API_URL}/items/${id}`);
    console.log(data)
  } catch (err) {
    console.log(err);
  }
}

