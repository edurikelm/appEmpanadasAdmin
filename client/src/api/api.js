import axios from 'axios';

export const getItems = async () => {
  try {
    const items = await axios.get('http://localhost:5000/api/items');
    return items.data.items;
  } catch (err) {
    console.log(err);
  }
};

export const guardarItem = async (data) => {
  try {
    const item = await axios.post('http://localhost:5000/api/items', data);
    console.log(item);
  } catch (err) {
    console.log(err);
  }
}

