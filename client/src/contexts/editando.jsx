/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const EditandoContext =createContext()

export function EditandoProvider ({children}) {

  const [editando, setEditando] = useState(false);
  const [inputData, setInputData] = useState({
    fecha: '',
    nombre:'',
    valor:''
  });
  
  return (
    <EditandoContext.Provider value={{editando, inputData, setEditando, setInputData}}>
      {children}
    </EditandoContext.Provider>
  )
}