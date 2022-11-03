import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from "react";





export function Cadastro(){

    const [pagina,setPagina] = useState(1)

    const handleClick = (e) => {
        setPagina(e)
    }


    useEffect(() => {
        exibirPagina()
      });

    const exibirPagina = () => {
        if (pagina===1){
            return (

            <Card.Body>
            <Card.Title>Cadastro de Endereço</Card.Title>
                <Card.Text>
                <div>

                <label>CEP: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Numero: </label>
                <br/>
                <input></input>
  
            </div>
            </Card.Text>
            <Button variant="primary">Salvar</Button>
            </Card.Body>
            )
        }
        if (pagina===2){
            return (
                <Card.Body>
            <Card.Title>Cadastro de Cliente</Card.Title>
                <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>IdEndereco: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Email: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Telefone: </label>
                <br/>
                <input></input>
            </div>
            </Card.Text>
            <Button variant="primary">Salvar</Button>
            </Card.Body>
            
            )
        }
        if (pagina===4){
            return (
                <Card.Body>
            <Card.Title>Cadastro de Produto</Card.Title>
                <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Descrição: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Qnt Estoque: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Valor Unitario: </label>
                <br/>
                <input></input>

                <br/>
                <label>imagemUrl: </label>
                <br/>
                <input></input>

                <br/>
                <label>idCategoria: </label>
                <br/>
                <input></input>
            </div>
            </Card.Text>
            <Button variant="primary">Salvar</Button>
            </Card.Body>
            )
        }
        if (pagina===3){
            return (
                <Card.Body>
                <Card.Title>Cadastro de Categoria</Card.Title>
                    <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input></input>
                
                <br/>
                <label>Descrição: </label>
                <br/>
                <input></input>
                
               
            </div>
            </Card.Text>
            <Button variant="primary">Salvar</Button>
            </Card.Body>
            )
        }
    }

    return (<>
        <Header></Header>

        
        <Container>
            <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(1)}} href="#first">Endereco</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(2)}} href="#1">Cliente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(3)}} href="#3">Categoria</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(4)}} href="#2">Produto</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

            {              
               exibirPagina()
            
            }
  
    </Card>
        </Container>



        <div className="home-footer position-relative top-100">
            <Footer></Footer>
        </div>
    </>)
}