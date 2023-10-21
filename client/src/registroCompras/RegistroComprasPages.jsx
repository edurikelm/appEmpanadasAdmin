import { useEffect, useState } from 'react';
import { getItems, guardarItem } from '../api/api';

const RegistroComprasPages = () => {
  const [inputData, setInputData] = useState({
    fecha: '',
    nombre: '',
    valor: '',
  });
  const [data, setData] = useState([]);

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
      await guardarItem(inputData);
      setInputData({
        ...inputData,
        fecha: '',
        nombre: '',
        valor: '',
      });
      handleObtenerListaCostos()
    } catch (err) {
      console.log(err);
    }
  };

  const handleObtenerListaCostos = async () => {
    const costosData = await getItems();
    setData(costosData);
  };

  useEffect(() => {
    handleObtenerListaCostos();
  }, []);

  // w-[90%] max-w-md mx-auto h-screen flex flex-col justify-center py-4 66
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      {/* Formulario ingreso compras */}
      <form
        className="py-5 flex flex-col justify-center items-center bg-slate-500 gap-4 rounded-2xl shadow-2xl md:h-1/3 md:w-1/3"
        onSubmit={handleSubmit}
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
            value={fecha}
          />
        </div>
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleInputChange}
            value={nombre}
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
            value={valor}
          />
        </div>
        <div className="w-2/3 pb-4">
          <button className="bg-sky-500 hover:bg-sky-700 text-white w-full rounded p-2">
            Guardar
          </button>
        </div>
      </form>
      {/* Lista de compras mes actual */}
      <div className="h-1/3 w-2/3 md:w-1/2 overflow-auto bg-slate-300">
        <h1>Lista compras mes actual</h1>
        {data.map((item) => (
          <div
            className="flex justify-between h-10 m-4 rounded-2xl bg-slate-200"
            key={item._id}
            onClick={() => console.log(item._id)}
          >
            <span className="flex items-center justify-center p-4">
              {item.fecha}
            </span>
            <span className="flex items-center justify-center">
              {item.nombre}
            </span>
            <span className="flex items-center justify-center">
              {item.valor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistroComprasPages;
