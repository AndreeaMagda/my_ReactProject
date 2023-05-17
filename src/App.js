
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Books from "./pages/books/Books";
import Movies from "./pages/movies/Movies";
import PlaceToVisit from "./pages/placeToVisit/Places";
import Quiz from "./pages/quiz/Quiz";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Account from './pages/account/Account';
import Favorite from './pages/favorite/Favorite';
import  Header  from './components/header/Header';
import Footer from './components/footer/Footer';
import AddComponent from './userComponent/addComponent/AddComponent';
import Contact from './userComponent/contact/ContactList';
import EditComponent from './userComponent/editComponent/EditComponent';
import ViewComponent from './userComponent/viweComponent/ViewComponent';
function App() {

  return (
    <>
  
    <Header/>
      <Routes>
         <Route path='home' element={<Home />}/>
       
        <Route path='books' element={<Books />}/>
       
        <Route path='movies' element={<Movies />}/>
        <Route path='place' element={<PlaceToVisit />}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='favorite' element={<Favorite />}/>
        <Route path='account' element={<Account/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='contact/add' element={<AddComponent />}/>
        <Route path='contact/view' element={<ViewComponent/>}/>
        <Route path='contact/edit' element={<EditComponent/>}/>
       
      </Routes>
    <Footer/>
   
    </>
  );
  
}

export default App;
