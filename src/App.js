
import { Routes, Route } from 'react-router-dom'
//pages
import { Account, Admin, Books, Cart, Favorite, Home, Movies, PlaceToVisit, Quiz, Shop, OderHistory, Login, Register, Reset } from './pages/index'
//components
import { Header, Footer } from './components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>

        <Route path='' element={<Home />} />

        <Route path='/books' element={<Books />} />

        <Route path='/movies' element={<Movies />} />
        <Route path='/placeS' element={<PlaceToVisit />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/account' element={<Account />} />
        <Route path='/oderHistory' element={<OderHistory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />

        <Route path='/admin/home' element={
          <AdminOnlyRoute>
            <Admin />
          </AdminOnlyRoute>} />
      </Routes>
      <Footer />

    </>
  );

}

export default App;
