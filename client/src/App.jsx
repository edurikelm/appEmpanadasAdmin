import RegistroComprasPages from './registroCompras/RegistroComprasPages';
import './App.css';
import { EditandoProvider } from './contexts/editando';

function App() {
  return (
    <EditandoProvider>
      <RegistroComprasPages />
    </EditandoProvider>
  );
}

export default App;
