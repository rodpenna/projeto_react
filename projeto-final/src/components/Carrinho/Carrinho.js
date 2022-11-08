import "./Carrinho.css";
import api from "../../server/api";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import React from "react";

import styled from "styled-components";

export default function Carrinho(props) {
  let { cartItems, onAdd, onRemove } = props;
  const subtotal = cartItems.reduce((a, c) => a + c.qty * c.valorUnitario, 0);

  //   const dataAtual = new Date().toISOString();

  async function postPedido() {
    const pedido = {
      dataPedido: "2025-11-08T12:45:56.858Z",
      status: true,
      cliente: {
        idCliente: 1,
      },
    };

    const itemPedidos = [];

    cartItems.map((res) => {
      itemPedidos.push({
        quantidade: res.qty,
        percDesc: 0,
        produto: {
          idProduto: res.idProduto,
        },
      });
    });

    const novoPedido = { ...pedido, itemPedido: itemPedidos };

    await api.post("pedido", novoPedido);

    cartItems = []; //Zera o carrinho

    localStorage.removeItem("cartItems"); //Zera o carrinho salvo localmente

    window.location.reload(false); //Atualiza a página
  }

  const Container = styled.div`
    max-width: 500px;
    margin: 100px auto 200px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const ContainerProduto = styled.div`
    margin-top: 30px;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const ImagemProduto = styled.img`
    width: 60px;
  `;

  const NomeProduto = styled.div`
    margin-right: 40px;
    margin-left: 10px;
  `;

  const PrecoProduto = styled.div`
    margin-bottom: 10px;
  `;

  const ContainerBotoes = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100px;
  `
  const Botao = styled.button `
    border: none;
    border-radius: 50%;
    padding: 2px 6px;
    margin: 0 8px;
  `
  const BotaoFinalizar = styled.button `
    margin: 0 auto;
    padding: 8px 25px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: #fff;
    width: 100%;
  `

  return (
    <>
      <Header></Header>
      <Container>
        <h2>Carrinho</h2>
        <div>
          {cartItems.length === 0 && <div>Não há itens no carrinho</div>}
          {cartItems.map((item) => (
            <ContainerProduto key={item.idProduto}>
              <ImagemProduto src={item.imagemUrl}></ImagemProduto>
              <NomeProduto>{item.nome}</NomeProduto>
              <ContainerBotoes>
                <Botao onClick={() => onRemove(item)}>
                  -
                </Botao>
                {item.qty}
                <Botao onClick={() => onAdd(item)}>
                  +
                </Botao>
                <PrecoProduto>
                  R${item.qty * item.valorUnitario.toFixed(2)}
                </PrecoProduto>
              </ContainerBotoes>
            </ContainerProduto>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr />
              {/* <div> */}
                <div>Total</div>
                {/* <div>Valor com frete: {valorTotal}</div> */}
                <div>
                  R$ {subtotal.toFixed(2)}
                </div>
              {/* </div> */}
              <hr />
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <BotaoFinalizar onClick={() => postPedido()}>Finalizar Pedido</BotaoFinalizar>
              </div>
            </>
          )}
        </div>
      </Container>
      <div className="home-footer position-relative top-100">
        <Footer></Footer>
      </div>
    </>
  );
}
