import { useContext } from 'react';
import { EditandoContext } from '../contexts/editando';

export const useForm = (initialState) => {

  const { editando, inputData, setEditando, setInputData } = useContext(EditandoContext);

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetInput = () => {
    setInputData(initialState);
  };

  // const actualizarInputData = () => {
  //   setInputData(initialState)
  // }

  return { handleInputChange, resetInput, inputData, setInputData, editando, setEditando };
};
