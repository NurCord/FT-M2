import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Navbar,Nav, Container} from 'react-bootstrap'

function Navx({onSearch}) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <SearchBar onSearch={onSearch}/>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Navx;
