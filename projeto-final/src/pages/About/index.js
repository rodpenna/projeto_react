import { useEffect, useState } from "react";

import axios from "axios";

import Header from "../../components/Header/Header";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

export function About() {
  const [listaIntegrantes, setListaIntegrantes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/8a880354-63ba-4e03-9a30-d13c917e87f7`)
      .then(({ data }) => {
        setListaIntegrantes(data);
      });
  }, []);

  const Container = styled.div`
    display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin: 0 auto;
          width: 90%;
          flex-wrap: wrap;
          margin: 100px auto;
  `;

  const CardContainer = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  `;

  const Imagem = styled.img`
    border: none;
    border-radius: 50%; 
    width: 150px;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: grey;
  `

  return (
    <>
      <Header></Header>

      <Container>
        {listaIntegrantes.map((o) => {
          return (
            <CardContainer>
              <Imagem src={o.avatar}></Imagem>
              <h3>{o.nome}</h3>
              <Link href={o.html}>Github</Link>
            </CardContainer>
          );
        })}
      </Container>

      <div className="home-footer position-relative top-100">
        <Footer></Footer>
      </div>
    </>
  );
}
