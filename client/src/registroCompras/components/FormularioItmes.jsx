/* eslint-disable react/prop-types */
import { editarItem, guardarItem } from '../../api/api';
import { formatearFecha } from '../../../helpers/formatearFecha';
import { useForm } from '../../hooks/useForm';

export const FormularioItems = ({handleObtenerListaCostos}) => {
  
  const { inputData, editando, setEditando, handleInputChange, resetInput } = useForm({
    fecha: '',
    nombre:'',
    valor:''
  });

  const { fecha, nombre, valor } = inputData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await guardarItem({
        ...inputData,
        fecha: new Date(inputData.fecha).toISOString(),
      });
      handleObtenerListaCostos();
      resetInput();
    } catch (err) {
      console.log(err);
    }
  };

  const editarItemBtn = async (e) => {
    e.preventDefault();
    try {
      await editarItem({
        ...inputData,
        fecha: new Date(inputData.fecha).toISOString(),
      });
      setEditando(false);
      resetInput();
    } catch (err) {
      console.log(err);
    }
    handleObtenerListaCostos();
  };

  const cancelarEitarBtn = (e) => {
    e.preventDefault();
    setEditando(false);
    resetInput();
  };

  return (
    <div className="flex flex-col md:w-auto gap-4 ">
      <p className="text-black font-bold text-2xl">Registrar compras</p>
      {/* Formulario ingreso compras */}
      <form
        className="flex flex-col justify-center items-center bg-slate-500 gap-4 rounded-2xl shadow-md py-2 mb-4 w-80 h-80"
        onSubmit={editando === true ? editarItemBtn : handleSubmit}
      >
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="date"
            name="fecha"
            placeholder="Fecha"
            onChange={handleInputChange}
            value={editando === true ? formatearFecha(inputData.fecha) : fecha}
          />
        </div>
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleInputChange}
            value={editando === true ? inputData.nombre : nombre}
          />
        </div>
        <div className="w-2/3 flex items-center">
          <span className="text-white font-semibold py-2 px-4 rounded-s bg-slate-400">
            $
          </span>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-e w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            name="valor"
            placeholder="Valor"
            onChange={handleInputChange}
            value={editando === true ? inputData.valor : valor}
          />
        </div>
        <div className="flex w-2/3 gap-2">
          <input className="" type="checkbox" name="ventaCheck" id="" />
          <label className="text-white" htmlFor="">
            Venta
          </label>
        </div>
        <div className="w-2/3">
          {editando === true ? (
            <>
              <button className="bg-amber-400 hover:bg-amber-700 text-white w-full rounded p-2">
                Editar
              </button>
              <a
                href="Cacelar"
                className="text-blue-400"
                onClick={cancelarEitarBtn}
              >
                Cancelar
              </a>
            </>
          ) : (
            <button className="bg-sky-500 hover:bg-sky-700 text-white w-full rounded p-2">
              Guardar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
