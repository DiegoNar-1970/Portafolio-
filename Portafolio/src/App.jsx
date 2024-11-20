import "./App.css";
import Fondo from "./threejs/fondo";

function App() {
  return (
    <div >
      <Fondo />
      <div className="fixed top-0 left-0 w-full h-full">
        {" "}
        {/* Div para posicionar el contenido encima */}
        <p className="text-white z-10">
          Portafolio
        </p>
      </div>
    </div>
  );
}

export default App;
