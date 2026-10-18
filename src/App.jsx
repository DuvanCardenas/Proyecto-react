import HolaMundo from "./compoente/HolaMundo";
import Saludo from "./compoente/Saludo";
import Despedida from "./compoente/Despedida";
import "./compoente/style.css";

function App() {
  return (
    <div>
      <HolaMundo />
      <Saludo />
      <Despedida />
    </div>
  )
}

export default App;