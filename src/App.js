
import {Routes,Route} from 'react-router-dom'
//pages
import { Account, Admin, Books, Cart,Favorite,Home,Movies,PlaceToVisit,Quiz,Shop} from './pages/index'
//components
import { Header, Footer } from './components/index';

function App() {

  return (
    <>
  
    <Header/>
      <Routes>
         <Route path='home' element={<Home />}/>
       
        <Route path='books' element={<Books />}/>
       
        <Route path='movies' element={<Movies />}/>
        <Route path='placeS' element={<PlaceToVisit />}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='favorite' element={<Favorite />}/>
        <Route path='account' element={<Account/>}/>
       
       
      </Routes>
    <Footer/>
   
    </>
  );
  
}

export default App;
