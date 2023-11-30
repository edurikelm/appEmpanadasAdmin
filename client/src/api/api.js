import axios from 'axios';
import { ordenarArrayFechas } from '../../helpers/formatearFecha';

const VITE_API_URL = import.meta.env.VITE_API_URL || 5000;

// API registro Insumos
export const getItems = async () => {
  try {
    const { data } = await axios.get(`${VITE_API_URL}/items`);
    const nuevaData = ordenarArrayFechas(data.items);
    return nuevaData;
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
};

export const editarItem = async (data) => {
  try {
    return await axios.put(`${VITE_API_URL}/items/${data.id}`, data);
  } catch (err) {
    console.log(err);
  }
};

export const eliminarItem = async (id) => {
  try {
    const data = await axios.delete(`${VITE_API_URL}/items/${id}`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// API registro Ventas
export const getVentas = async () => {
  try {
    const { data } = await axios.get(`${VITE_API_URL}/ventas`);
    const nuevaData = ordenarArrayFechas(data.ventas);
    return nuevaData
  } catch (err) {
    console.log(err);
  }
};

export const guardarVenta = async (data) => {

  const newData = {
    fecha: data.fecha,
    producto: data.idProducto,
    cantidad: data.cantidad,
  };
  try {
    const venta = await axios.post(`${VITE_API_URL}/ventas`, newData);
    return venta
  } catch (err) {
    console.log(err);
  }
};

export const editarVenta = async (data) => {
  try {
    return await axios.put(`${VITE_API_URL}/ventas/${data.id}`, data);
  } catch (err) {
    console.log(err);
  }
};

export const eliminarVenta = async (id) => {
  try {
    const data = await axios.delete(`${VITE_API_URL}/ventas/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// API Productos
export const getProductos = async () => {
  try {
    const { data } = await axios.get(`${VITE_API_URL}/productos`);
    const nuevaData = data.productos;
    return nuevaData;
  } catch (err) {
    console.log(err);
  }
};

export const getProducto = async (id) => {
  try {
    const producto = await axios.get(`${VITE_API_URL}/productos/${id}`);
    return producto.data.producto.nombre;
  } catch (err) {
    console.log(err);
  }
};

export const guardarProducto = async (data) => {
  try {
    const producto = await axios.post(`${VITE_API_URL}/productos`, data);
    return producto;
  } catch (err) {
    console.log(err);
  }
};

export const editarProducto = async (data) => {
  try {
    return await axios.put(`${VITE_API_URL}/productos/${data.id}`, data);
  } catch (err) {
    console.log(err);
  }
};

export const eliminarProducto = async (id) => {
  try {
    const data = await axios.delete(`${VITE_API_URL}/producto/${id}`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
