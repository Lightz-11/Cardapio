import { Routes, Route } from "react-router-dom";
import { Categoria } from "../pages/Categoria";
import {Home} from "../pages/Home";
import { Produto } from "../pages/Produto";

export function UserRoutes() {

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categoria/:id" element={<Categoria/>}/>
        <Route path="/produto/:id" element={<Produto/>}/>
    </Routes>
  );
}