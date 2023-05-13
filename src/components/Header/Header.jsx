import { useState} from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'semantic-ui-css/semantic.min.css';
import imgLogo from '../../Images/logo.png'
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home"><img src ={imgLogo} alt="logo err"/>Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="quiz">Quiz</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="places">Place To Visit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    </>
      )}
 export default Header     