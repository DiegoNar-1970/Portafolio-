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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          mollitia aperiam amet, officiis nulla saepe doloribus error voluptatum
          quae! Repellendus aperiam sunt ab magni. Dolores sed vitae asperiores
          obcaecati voluptas.
        </p>
      </div>
    </div>
  );
}

export default App;
