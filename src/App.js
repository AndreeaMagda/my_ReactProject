
import { Routes, Route } from 'react-router-dom'
//pages
import { Account, Admin, Books, Cart, Favorite, Home, Movies, PlaceToVisit, Quiz, Shop, OderHistory, Login, Register, Reset } from '../src/pages/index'
//components
import { Header, Footer } from './components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'boxicons/css/boxicons.min.css'
import './App.scss'
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>

        <Route path='' element={<Home />} />

       
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />

        <Route path='/admin/*' element={
          <AdminOnlyRoute>
            <Admin />
          </AdminOnlyRoute>} />
      </Routes>
      <Footer />

    </>
  );

}

export default App;
