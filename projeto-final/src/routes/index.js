import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import {Login} from '../pages/Login'


export const Rotas = () =>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>   
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<NotFound/>}/>  
        </Routes>
      </BrowserRouter> 
    )
}