
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Movies from "../pages/Movies";
import PlaceToVisit from "../pages/PlaceToVisit";
import Quiz from "../pages/Quiz";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Account from '../pages/Account';
import Favorite from '../pages/Favorite';

const Routers = () => {
    return <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='books' element={<Books />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='place' element={<PlaceToVisit />}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='favorite' element={<Favorite />}/>
        <Route path='account' element={<Account/>}/>
    </Routes>
};
export default Routers;