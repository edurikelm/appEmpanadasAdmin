import axios from 'axios';

export const getItems = async () => {
  try {
    const items = await axios.get('https://app-empanadas-admin.onrender.com/api/items');
    return items.data.items;
  } catch (err) {
    console.log(err);
  }
};

export const guardarItem = async (data) => {
  try {
    const item = await axios.post('https://app-empanadas-admin.onrender.com/api/items', data);
    console.log(item);
  } catch (err) {
    console.log(err);
  }
}

