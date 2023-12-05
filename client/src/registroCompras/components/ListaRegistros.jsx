/* eslint-disable react/prop-types */
import { useContext } from "react";
import { formatearValor } from "../../../helpers/calculosEconomicos";
import { formatearFecha } from "../../../helpers/formatearFecha";
import { eliminarItem } from "../../api/api";
import { useForm } from "../../hooks/useForm";
import { EditandoContext } from "../../contexts/editando";

export const ListaRegistros = ({data, handleObtenerListaCostos}) => {

  const { setIsCheck } = useContext(EditandoContext)

  const { setEditando, setInputData } = useForm({
    fecha: '',
    nombre: '',
    valor: '',
  });

  const eliminarItemBtn = async (id) => {
    try {
      await eliminarItem(id);
    } catch (err) {
      console.log(err);
    }
    handleObtenerListaCostos();
  };
  return (
    <div className="flex flex-col h-80 md:w-2/3 gap-4 text-xs md:text-base w-96">
      <strong>
        <h1 className="text-black text-2xl">Lista compras mes actual</h1>
      </strong>
      <div className="overflow-auto bg-slate-300 rounded-md shadow-md">
        {data.map((item) => (
          <div
            className="flex justify-between h-10 m-4 rounded-2xl bg-slate-200"
            key={item._id}
            onDoubleClick={() => {
              setIsCheck(false)
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
              {formatearValor(item.valor)}
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
