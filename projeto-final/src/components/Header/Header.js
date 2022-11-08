import {NavLink} from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Header.css'

export default function Header(props){
  const { countCartItems } = props;

    return (
    <>
    {/* <Navbar bg="dark" variant="dark" className="nav-main">
        <Container className="nav-cont">
            <Navbar.Brand className="nav-logo" href="/">Ecommerce</Navbar.Brand>
            <Nav className="ms-auto">
                <span className="pe-5"><Nav.Link as={NavLink} to='/' >Home</Nav.Link></span>
                <span className="pe-5"><Nav.Link as={NavLink} to='/login'>Login</Nav.Link></span>
                <span className="pe-5"><Nav.Link as={NavLink} to='/about'>About</Nav.Link></span>
                <span className="pe-5"><Nav.Link as={NavLink} to='/cadastro'>Cadastro</Nav.Link></span>
                <span className="pe-5"><Nav.Link as={NavLink} to='/consulta'>Consulta</Nav.Link></span>
            </Nav>
        </Container>
    </Navbar> */}
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/cadastro'>Cadastro</Nav.Link>
            <Nav.Link as={NavLink} to='/consulta'>Consulta</Nav.Link>
            <Nav.Link as={NavLink} to='/carrinho'>
              Carrinho
              {countCartItems ? (<button className="badge">{countCartItems}</button>) : ("")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)


}