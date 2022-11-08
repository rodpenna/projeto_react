import { useEffect, useState, useContext } from "react";

import { CarrinhoContext } from "../../contexts/CarrinhoContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import api from "../../server/api";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardComponent from "../../components/Card/CardComponent";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";

import "./index.css";

export function Home(props) {
  const [listaProduto, setListaProduto] = useState([]);

  useEffect(() => {
    api.get("produto/all").then(({ data }) => {
      setListaProduto(data);
      console.log(data);
    });
    console.log();
  }, []);

  return (
    <>
      <div>
        <Header countCartItems={props.cartItems.length}></Header>

        <BannerCarousel></BannerCarousel>

        <div className="home-search">
          <SearchBar></SearchBar>
        </div>

        {/* <CardComponent onAdd={onAdd}/>*/}

        <Container fluid="md" style={{ marginBottom: "100px" }}>
          <Col>
            <Row className="d-flex justify-content-center position-relative">
              <Col>
                <div className="mt-5">
                  <Row>
                    <Col className="xl-5">
                      {/* <Row xs={4} md={8} className="g-4 p-2"> */}
                      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
                        {listaProduto.map((o) => {
                          return (
                            <Col className="mb-4">
                              <Card style={{ maxWidth: "18rem" }}>
                                <div
                                  className="ratio"
                                  style={{ "--bs-aspect-ratio": "140%" }}
                                >
                                  <Card.Img variant="top" src={o.imagemUrl} />
                                </div>
                                <Card.Body
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Card.Title>{o.nome}</Card.Title>
                                  <Card.Text style={{ height: "220px" }}>
                                    {/* <span>Descrição:</span>
                              <br /> */}
                                    <span>{o.descricao}</span>
                                  </Card.Text>
                                  <Button
                                    variant="primary"
                                    onClick={() => props.onAdd(o)}
                                  >
                                    Adicionar ao carrinho
                                  </Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>

        <div className="home-footer position-relative top-100">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
