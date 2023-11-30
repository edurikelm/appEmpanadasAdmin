/* eslint-disable react/prop-types */
import { formatearValor } from '../../../helpers/calculosEconomicos';
import { formatearFecha } from '../../../helpers/formatearFecha';
import { eliminarVenta } from '../../api/api';
// import { useForm } from '../../hooks/useForm';

export const ListaRegistrosVentas = ({
  dataVentas,
  handleObtenerListaVentas,
}) => {
  // const { setEditando, setInputData } = useForm({
  //   fecha: '',
  //   nombre: '',
  //   valor: '',
  // });

  const eliminarVentaBtn = async (id) => {
    try {
      await eliminarVenta(id);
    } catch (err) {
      console.log(err);
    }
    handleObtenerListaVentas();
  };
  return (
    <div className="flex flex-col h-80 w-full md:w-1/3 gap-4">
      <strong>
        <h1 className="text-black text-2xl">Lista ventas mes actual</h1>
      </strong>
      <div className="overflow-auto bg-slate-300 rounded-md shadow-md">
        {dataVentas.map((item) => (
          <div
            className="flex justify-between h-10 m-4 rounded-2xl bg-slate-200"
            key={item._id}
            // onDoubleClick={() => {
            //   setEditando(true);
            //   setInputData({
            //     id: item._id,
            //     fecha: item.fecha,
            //     nombre: item.producto.nombre,
            //     cantidad: item.cantidad
            //   });
            // }}
          >
            <span className="flex items-center justify-center p-4">
              {formatearFecha(item.fecha)}
            </span>
            <span className="flex items-center justify-center">{
              item.producto.nombre
            }</span>
            <span className="flex items-center justify-center">
              {item.cantidad}
            </span>
            <span className="flex items-center justify-center">
              {formatearValor(item.cantidad*item.producto.valor)}
            </span>
            <button
              className="bg-red-400 w-10 rounded-md text-white"
              onClick={() => eliminarVentaBtn(item._id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
