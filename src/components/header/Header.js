
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import 'semantic-ui-css/semantic.min.css';
import imgLogo from '../../Images/logo.png'
import favImg from'../../Images/fav.svg'
import accImg from '../../Images/acc.svg'
import {BsFillHandbagFill} from 'react-icons/bs'
import {BiHistory} from 'react-icons/bi'
import  styles from './Header.module.scss'


const activeLink=({isActive})=>(isActive ? $(styles.active):"")

function Header() {
  return (
    <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home" ><img src={imgLogo} alt='logo err' />Harry Potter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="shop" className={activeLink}>Shop</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="places">Place To Visit</Nav.Link>
            <Nav.Link href="quiz">Quiz</Nav.Link>
             
          </Nav>
          <Nav>
          <Nav.Link href="login" ><p> Login</p> </Nav.Link>
          <Nav.Link href="register" ><p> Register</p> </Nav.Link>
          </Nav>
          <Nav >
            
            <Nav.Link href="cart"><BsFillHandbagFill size={30}  className='flex'/><p>0</p></Nav.Link>
            <Nav.Link eventKey={2} href="favorite"> <img src={favImg} alt='fav-icon-error'/> </Nav.Link>
            <Nav.Link eventKey={2} href="account"> <img src={accImg} alt='acc-icon-error'/> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
      )}
 export default Header   ;  
