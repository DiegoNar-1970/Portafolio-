import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Img from "./components/imgComponent/Img";
import Menu from "./menu/menu";
import { About, Contac, Home } from "./routes/lazyImports";
import Fondo from './threejs/Fondo';
function App() {
  return (
    <>
      <Fondo />
      <div className="fixed top-0 left-0 w-full h-full overflow-auto srcoll_personal">
        <article className="flex flex-col p-3">
          <Menu />
          <Img/>
          <Suspense fallback={<div className="loader"></div>}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contac" element={<Contac />} />
            </Routes>
          </Suspense>
          <Outlet/>
          <Footer />
        </article>
      </div>
    </>
  );
}

export default App;
