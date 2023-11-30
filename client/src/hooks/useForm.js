import { useContext } from 'react';
import { EditandoContext } from '../contexts/editando';

export const useForm = (initialState) => {

  const { editando, inputData, isCheck, setEditando, setInputData, setIsCheck } = useContext(EditandoContext);

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

  return { handleInputChange, resetInput, inputData, setInputData, isCheck, editando, setEditando, setIsCheck };
};
