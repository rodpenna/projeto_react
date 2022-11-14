import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import {Login} from '../pages/Login'
import {Cadastro} from '../pages/Cadastro'
import {Consulta} from '../pages/Adm'
import React, { useState, useEffect } from "react";
import Carrinho from "../components/Carrinho/Carrinho";


export const Rotas = (props) =>{
  //CARRINHO
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.idProduto === product.idProduto);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.idProduto === product.idProduto ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.idProduto === product.idProduto);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.idProduto !== product.idProduto);
      setCartItems(newCartItems);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
        x.idProduto === product.idProduto ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems)

      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };

  useEffect(() => {
    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  }, [])
  //CARRINHO

    return(
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home
            cartItems={cartItems}
            onAdd={onAdd} 
            onRemove={onRemove} 
          />}/>
          <Route path="/" element={<Login/>}/>   
          <Route path="/about" element={<About/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/consulta" element={<Consulta/>}/>
          <Route path="/carrinho" element={<Carrinho
            cartItems={cartItems}
            onAdd={onAdd} 
            onRemove={onRemove} 
          />}/>
          <Route path="/*" element={<NotFound/>}/>  
        </Routes>
      </BrowserRouter> 
    )
}