import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contacto } from "../pages/Home/Contacto/Contacto";
import { Proyectos } from "../pages/Proyectos/Proyectos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
