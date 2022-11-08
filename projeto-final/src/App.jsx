import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import {Rotas} from "./routes"
import './index.css'

function App() {
  return (
  <>
    <CarrinhoProvider>
     <Rotas></Rotas>
    </CarrinhoProvider>
  </>);
}

export default App;
