import { useContext, useEffect, useState } from "react";
import { getItems, getProductos, getVentas } from '../api/api';
import { EditandoContext } from "../contexts/editando";


export function useItems () {

  const { totalCostos, totalVentas, setTotalCostos, setTotalVentas } = useContext(EditandoContext);

  const [data, setData] = useState([]);
  const [dataVentas, setDataVentas] = useState([]);
  const [dataProductos, setDataProductos] = useState([]);

  const handleObtenerListaCostos = async () => {
    const costosData = await getItems();
    setData(costosData);
  };

  const calcularTotalCostos = () => {
    const initialValue = 0

    const datosInt = data.map(item => Number(item.valor))
    const costos = datosInt.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    setTotalCostos(costos)
  }

  const calcularTotalVentas = () => {
    const initialValue = 0

    const datosInt = dataVentas.map(item => Number(item.producto.valor*item.cantidad))
    const ventas = datosInt.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    setTotalVentas(ventas)
    
  }

  const handleObtenerListaVentas = async () => {
    const costosData = await getVentas();
    setDataVentas(costosData);
  };

  const handleObtenerListaProductos = async () => {
    const productosData = await getProductos();
    setDataProductos(productosData);
  };

  useEffect(() => {
    handleObtenerListaCostos();
    handleObtenerListaVentas()
    handleObtenerListaProductos()
  }, []);

  return { data, dataVentas, dataProductos, calcularTotalCostos, calcularTotalVentas, handleObtenerListaCostos, handleObtenerListaVentas, handleObtenerListaProductos, totalCostos, totalVentas, setTotalCostos, setTotalVentas }

}