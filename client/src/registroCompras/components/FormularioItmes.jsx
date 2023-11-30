/* eslint-disable react/prop-types */
import { editarItem, guardarItem, guardarVenta } from '../../api/api';
import { formatearFecha } from '../../../helpers/formatearFecha';
import { useForm } from '../../hooks/useForm';
import { useItems } from '../../hooks/useItems';
import { useState } from 'react';

export const FormularioItems = ({
  handleObtenerListaCostos,
  handleObtenerListaVentas,
}) => {
  const [productoValor, setProductoValor] = useState(0);
  const {
    inputData,
    editando,
    isCheck,
    setEditando,
    handleInputChange,
    resetInput,
    setIsCheck,
  } = useForm({
    fecha: '',
    nombre: '',
    valor: '',
    cantidad: 0,
    idProducto: '',
  });
  const { dataProductos } = useItems();
  const { fecha, nombre, valor, cantidad } = inputData;


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isCheck) {
        await guardarVenta({
          ...inputData,
          fecha: new Date(inputData.fecha).toISOString(),
          nombre: inputData.nombre,
          cantidad: inputData.cantidad,
          idProducto: inputData.idProducto,
        });
      } else {
        await guardarItem({
          ...inputData,
          fecha: new Date(inputData.fecha).toISOString(),
        });
      }
      handleObtenerListaCostos();
      handleObtenerListaVentas();
      resetInput();
      setProductoValor(0)
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

  const handleCheck = () => (!isCheck ? setIsCheck(true) : setIsCheck(false));

  const handleSelectValorProducto = (e) => {
    const idProducto = e.target.value
    if(idProducto == 0){
      return setProductoValor(0)
    }
    const {valor} = dataProductos.find(el => el._id === e.target.value)
    return setProductoValor(valor)
  }

  return (
    <div className="flex flex-col w-auto gap-4">
      <p className="text-black font-bold text-2xl">Registrar compras</p>
      {/* Formulario ingreso compras */}
      <form
        className="flex flex-col justify-center bg-slate-500 gap-4 rounded-2xl shadow-md p-4 mb-4 w-70 h-80"
        onSubmit={editando ? editarItemBtn : handleSubmit}
      >
        <div className="w-auto">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="date"
            name="fecha"
            placeholder="Fecha"
            onChange={handleInputChange}
            value={editando ? formatearFecha(inputData.fecha) : fecha}
          />
        </div>
        <div className="w-auto">
          {!isCheck ? (
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleInputChange}
              value={editando ? inputData.nombre : nombre}
            />
          ) : (
            <select
              name="idProducto"
              onChange={handleInputChange}
              onBlur={handleSelectValorProducto}
              className="w-full bg-gray-200 border-2 border-gray-200 rounded p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="0">-- Seleccionar Producto--</option>
              {dataProductos.map((producto) => (
                <option key={producto._id} value={producto._id}>
                  {producto.nombre}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex flex-row items-center gap-3">
          {isCheck && (
            <div className="w-auto">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="number"
                name="cantidad"
                placeholder="Cantidad"
                onChange={handleInputChange}
                value={editando ? inputData.cantidad : cantidad}
              />
            </div>
          )}
          <div className="w-auto flex items-center">
            <span className="text-white font-semibold py-2 px-4 rounded-s bg-slate-400">
              $
            </span>

            {isCheck ? (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-e w-auto p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                name="valor"
                placeholder="Valor"
                onChange={handleInputChange}
                value={productoValor}
                disabled
              />
            ) : (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-e w-auto p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                name="valor"
                placeholder="Valor"
                onChange={handleInputChange}
                value={editando ? inputData.valor : valor}
              />
            )}
          </div>
        </div>
        <div className="flex w-auto auto gap-2">
          <input
            onChange={handleCheck}
            className=""
            type="checkbox"
            name="ventaCheck"
            disabled={editando && true}
            checked={isCheck}
          />
          <label className="text-white" htmlFor="">
            Venta
          </label>
        </div>
        <div className="w-auto">
          {editando ? (
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
