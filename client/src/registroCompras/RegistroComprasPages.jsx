import { useItems } from '../hooks/useItems';
import { FormularioItems } from './components/FormularioItmes';
import { ListaRegistros } from './components/ListaRegistros';
import { CardMonto } from './components/CardMonto';
import { ListaRegistrosVentas } from './components/ListaRegistrosVentas';
import { formatearValor } from '../../helpers/calculosEconomicos'
import { useEffect } from 'react';

const RegistroComprasPages = () => {
  const {
    data,
    dataVentas,
    handleObtenerListaCostos,
    handleObtenerListaVentas,
    calcularTotalCostos,
    calcularTotalVentas,
    totalCostos,
    totalVentas
  } = useItems();

  useEffect(() => {
    calcularTotalCostos()
    calcularTotalVentas()
  })

  return (
    <section className="flex flex-col bg-slate-200 h-screen justify-center">
      <div className="flex flex-row justify-center gap-7 h-20 mb-10">
        <CardMonto tipo="Gastos" color="bg-red-300" total={formatearValor(totalCostos)}/>
        <CardMonto tipo="Ingreso" color="bg-blue-300" total={formatearValor(totalVentas-totalCostos)}/>
        <CardMonto tipo="Ventas" color="bg-green-300" total={formatearValor(totalVentas)}/>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mx-5">
        <FormularioItems
          handleObtenerListaCostos={handleObtenerListaCostos}
          handleObtenerListaVentas={handleObtenerListaVentas}
        />
        {/* Lista de compras mes actual */}
        <ListaRegistros
          data={data}
          handleObtenerListaCostos={handleObtenerListaCostos}
        />
        <ListaRegistrosVentas
          dataVentas={dataVentas}
          handleObtenerListaVentas={handleObtenerListaVentas}
        />
      </div>
    </section>
  );
};

export default RegistroComprasPages;
