
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'semantic-ui-css/semantic.min.css';
import cartImg from '../../Images/cart.svg'
import imgLogo from '../../Images/logo.png'
import favImg from'../../Images/fav.svg'
import accImg from '../../Images/acc.svg'
function Header() {
  return (
    <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home" ><img src={imgLogo} alt='logo err' />Harry Potter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="places">Place To Visit</Nav.Link>
            <Nav.Link href="quiz">Quiz</Nav.Link>
           
           
          </Nav>
          <Nav>
            <Nav.Link href="cart"><img src={cartImg} alt='cart-icon-error'/></Nav.Link>
            <Nav.Link eventKey={2} href="favorite"> <img src={favImg} alt='fav-icon-error'/> </Nav.Link>
            <Nav.Link eventKey={2} href="account"> <img src={accImg} alt='acc-icon-error'/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
      )}
 export default Header   ;  
