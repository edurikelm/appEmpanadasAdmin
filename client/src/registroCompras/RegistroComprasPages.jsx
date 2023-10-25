import { useEffect, useState } from 'react';
import { editarItem, eliminarItem, getItems, guardarItem } from '../api/api';
import { formatearFecha } from '../../helpers/formatearFecha';

const RegistroComprasPages = () => {
  const [inputData, setInputData] = useState({
    fecha: '',
    nombre: '',
    valor: '',
  });
  const [data, setData] = useState([]);
  const [editando, setEditando] = useState(false);

  const { fecha, nombre, valor } = inputData;

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await guardarItem({
        ...inputData,
        fecha: new Date(inputData.fecha).toISOString(),
      });
      setInputData({
        ...inputData,
        fecha: '',
        nombre: '',
        valor: '',
      });
      handleObtenerListaCostos();
    } catch (err) {
      console.log(err);
    }
  };

  const eliminarItemBtn = async (id) => {
    try {
      await eliminarItem(id);
    } catch (err) {
      console.log(err);
    }
    handleObtenerListaCostos();
  };

  const editarItemBtn = async (e) => {
    e.preventDefault();
    try {
      await editarItem(inputData);
      setEditando(false);
      setInputData({
        ...inputData,
        fecha: '',
        nombre: '',
        valor: '',
      });
    } catch (err) {
      console.log(err);
    }
    handleObtenerListaCostos();
  };

  const handleObtenerListaCostos = async () => {
    const costosData = await getItems();
    setData(costosData);
  };

  const cancelarEitarBtn = (e) => {
    e.preventDefault();
    setEditando(false);
    setInputData({
      ...inputData,
      fecha: '',
      nombre: '',
      valor: '',
    });
  }

  useEffect(() => {
    handleObtenerListaCostos();
  }, []);

  // w-[90%] max-w-md mx-auto h-screen flex flex-col justify-center py-4 66
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      {/* Formulario ingreso compras */}
      <form
        className="py-5 flex flex-col justify-center items-center bg-slate-500 gap-4 rounded-2xl shadow-2xl md:h-1/3 md:w-1/3"
        onSubmit={editando === true ? editarItemBtn : handleSubmit}
      >
        <div className=" w-2/3 text-center">
          <p className="text-white font-bold text-md md:text-xl">
            Registrar compras
          </p>
        </div>
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="date"
            name="fecha"
            placeholder="Fecha"
            onChange={handleInputChange}
            value={editando === true ? formatearFecha(inputData.fecha) : fecha}
          />
        </div>
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-e w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name="valor"
            placeholder="Valor"
            onChange={handleInputChange}
            value={editando === true ? inputData.valor : valor}
          />
        </div>
        <div className="w-2/3 pb-4 text-center">
          {editando === true ? (
            <>
              <button className="bg-amber-400 hover:bg-amber-700 text-white w-full rounded p-2">
                Editar
              </button>
              <a href="Cacelar" className="text-blue-400" onClick={cancelarEitarBtn}>
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
      {/* Lista de compras mes actual */}
      <strong>
        <h1>Lista compras mes actual</h1>
      </strong>
      <div className="h-1/3 w-2/3 md:w-1/2 overflow-auto bg-slate-300">
        {data.map((item) => (
          <div
            className="flex justify-between h-10 m-4 rounded-2xl bg-slate-200"
            key={item._id}
            onDoubleClick={() => {
              setEditando(true);
              setInputData({
                id: item._id,
                fecha: item.fecha,
                nombre: item.nombre,
                valor: item.valor,
              });
            }}
          >
            <span className="flex items-center justify-center p-4">
              {formatearFecha(item.fecha)}
            </span>
            <span className="flex items-center justify-center">
              {item.nombre}
            </span>
            <span className="flex items-center justify-center">
              {'$' + new Intl.NumberFormat().format(item.valor)}
            </span>
            <button
              className="bg-red-400 w-10 rounded-md text-white"
              onClick={() => eliminarItemBtn(item._id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistroComprasPages;
