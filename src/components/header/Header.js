
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import 'semantic-ui-css/semantic.min.css';
import imgLogo from '../../Images/logo.png'
import favImg from '../../Images/fav.svg'
import accImg from '../../Images/acc.svg'
import { BsFillHandbagFill } from 'react-icons/bs'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';



function Header() {

  const [displayName, setdisplayName] = useState("")
  const activeLink = ({ isActive }) => (isActive ? `$(styles.active)` : "")
  const navigate = useNavigate();

  const dispatch = useDispatch()

  //monitor curently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //const uid = user.uid;
        if (user.displayName == null) {
          const u1 = user.email.substring(0,user.email.indexOf("@"));
          const uName=u1.charAt(0).toLocaleUpperCase()+u1.slice(1)
        // console.log(uName);
          setdisplayName(uName)
        } else{
       // console.log(user.displayName);
      setdisplayName(user.displayName)
}


        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName: displayName,
          userID: user.uid,
        }))

      } else {
        setdisplayName("")
      }
    });
  }, [])


  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully...")
      navigate("/home")
    }).catch((error) => {
      toast.error(error.message);
    });
  };
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
            <Nav  >
              <Nav.Link href="login" > Login</Nav.Link>

              <Nav.Link href="register" > Register </Nav.Link>
              <Nav.Link href="/home" onClick={logoutUser} >Logout </Nav.Link>
            </Nav>
            <Nav >

              <Nav.Link href="cart"><BsFillHandbagFill size={30} /><p>0</p></Nav.Link>
              <Nav.Link eventKey={2} href="favorite"> <img src={favImg} alt='fav-icon-error' /> </Nav.Link>
              {/* <Nav.Link eventKey={2} href="account"> <img src={accImg} alt='acc-icon-error' /> </Nav.Link> */}
              <a href='#'>
                <img src={accImg} alt='acc-icon-error' sizes='16' />
                Hi, {displayName}
              </a>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
export default Header;  
