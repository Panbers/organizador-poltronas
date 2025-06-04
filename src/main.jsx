import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovoOnibus from "./pages/NovoOnibus";
import Organizador from "./pages/Organizador";
import Passageiro from "./pages/Passageiro";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NovoOnibus />} />
      <Route path="/organizador/:id" element={<Organizador />} />
      <Route path="/onibus/:id" element={<Passageiro />} />
    </Routes>
  </BrowserRouter>
);
