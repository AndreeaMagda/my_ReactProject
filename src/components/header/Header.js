
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
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';
import  AdminOnlyRoute, { AdminOnlyLink }  from '../adminOnlyRoute/AdminOnlyRoute';


function Header() {

  const [displayName, setdisplayName] = useState("")
  const activeLink = ({ isActive }) => (isActive ? `$(styles.active)` : "")
  const navigate = useNavigate();

  const dispatch = useDispatch()

  //monitor curently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toLocaleUpperCase() + u1.slice(1)
          setdisplayName(uName)
        } else {
          setdisplayName(user.displayName)
        }


        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }))

      } else {
        setdisplayName("")
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, [dispatch, displayName])


  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully...")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message);
    });
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" ><img src={imgLogo} alt='logo err mr-3' />Harry Potter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
         
        

            </Nav>
            <Nav  >
              <ShowOnLogout>
                <Nav.Link href="login" > Login</Nav.Link>
              </ShowOnLogout>
              <ShowOnLogin>
                <Nav.Link href="/" onClick={logoutUser} >Logout </Nav.Link>
              </ShowOnLogin>
            </Nav>
            <Nav >

              <Nav.Link href="cart"><BsFillHandbagFill size={30} /><p>0</p></Nav.Link>
              <ShowOnLogin>
                <Nav.Link eventKey={2} href="favorite"> <img src={favImg} alt='fav-icon-error' /> </Nav.Link>

                {/* <Nav.Link eventKey={2} href="account"> <img src={accImg} alt='acc-icon-error' /> </Nav.Link> */}
                <a href='#home' style={{ color: "#ff7722" }} className='mr-2'>
                  <img src={accImg} alt='acc-icon-error' sizes='16' className='mr-3' />
                  Hi, {displayName}
                </a>
              </ShowOnLogin>


            </Nav>
            <Nav >
              
               
             
                <AdminOnlyLink><Nav.Link href="/admin/all-products"> <button type="button" className="btn btn-secondary ml-5">Admin  </button></Nav.Link></AdminOnlyLink>
            
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
export default Header;  
