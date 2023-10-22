import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL

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

