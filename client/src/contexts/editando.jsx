/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const EditandoContext =createContext()

export function EditandoProvider ({children}) {

  const [isCheck, setIsCheck] = useState(false);
  const [editando, setEditando] = useState(false);
  const [inputData, setInputData] = useState({
    fecha: '',
    nombre:'',
    valor:'',
    cantidad: 0
  });
  const [totalCostos, setTotalCostos] = useState(0);
  const [totalVentas, setTotalVentas] = useState(0);
  
  return (
    <EditandoContext.Provider value={{editando, inputData, isCheck, totalCostos, totalVentas, setEditando, setInputData, setIsCheck, setTotalCostos, setTotalVentas}}>
      {children}
    </EditandoContext.Provider>
  )
}