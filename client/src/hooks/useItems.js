import { useEffect, useState } from "react";
import { getItems } from '../api/api';
import { formatearValor } from "../../helpers/calculosEconomicos";


export function useItems () {
  const [data, setData] = useState([]);

  const handleObtenerListaCostos = async () => {
    const costosData = await getItems();
    setData(costosData);
  };

  const calcularGastos = () => {
    const initialValue = 0
    const datosInt = data.map(item => Number(item.valor))
    const costos = datosInt.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    const formatTotalCostos = formatearValor(costos)
    return formatTotalCostos
  }

  useEffect(() => {
    handleObtenerListaCostos();
  }, []);

  return { data, calcularGastos, handleObtenerListaCostos }

}