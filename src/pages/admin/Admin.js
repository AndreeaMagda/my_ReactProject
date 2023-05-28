import React from 'react'
import Navbar from '../../components/admin/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomeA from '../../components/admin/home/Home'
import ViewProduct from '../../components/admin/viewProduct/ViewProduct'
import Orders from '../../components/admin/orders/Orders'
import AddProduct from '../../components/admin/addProduct/AddProduct';
//import styles from './Admin.module.scss'
import 'boxicons/css/boxicons.min.css'
import '../../App.scss'
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <>
    <div >
      <div >
      <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Navbar />
        <Outlet/>
            
     
      <div >
        <Routes>

          <Route path="home" element={<HomeA />} />
          <Route path="all-products" element={<ViewProduct />} />
          <Route path="add-product/:id" element={<AddProduct/>} />
          <Route path="orders" element={<Orders />} />

        </Routes>
      </div>
</div>;
      </div>
    </div>
    </>
  )
}

export default Admin
