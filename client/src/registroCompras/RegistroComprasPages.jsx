import { useItems } from '../hooks/useItems';
import { FormularioItems } from './components/FormularioItmes';
import { ListaRegistros } from './components/ListaRegistros';
import { CardMonto } from './components/CardMonto';
import { EditandoProvider } from '../contexts/editando';

const RegistroComprasPages = () => {

  const { data, calcularGastos, handleObtenerListaCostos } = useItems();

  const totalGastos = calcularGastos()

  return (
    <EditandoProvider>
      <section className="flex flex-col bg-slate-200 h-screen justify-center">
        <div className="flex flex-row justify-center gap-7 h-20 mb-10">
          <CardMonto gastos='Gastos' valor={totalGastos} color="bg-red-300"/>
          <CardMonto gastos='Ingreso' valor='$19.000' color="bg-blue-300"/>
          <CardMonto gastos='Ventas' valor='$49.000' color="bg-green-300"/>
        </div>
        <div className="flex flex-col md:flex-row md:gap-14 justify-center items-center gap-3">
          <FormularioItems handleObtenerListaCostos={handleObtenerListaCostos}/>
          {/* Lista de compras mes actual */}
          <ListaRegistros data={data} handleObtenerListaCostos={handleObtenerListaCostos}/>
        </div>
      </section>
    </EditandoProvider>
  );
};

export default RegistroComprasPages;
