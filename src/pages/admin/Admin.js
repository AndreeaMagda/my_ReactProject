import React from 'react'
import Navbar from '../../components/admin/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomeA from '../../components/admin/home/Home'
import ViewProduct from '../../components/admin/viewProduct/ViewProduct'
import Orders from '../../components/admin/orders/Orders'
import AddProduct from '../../components/admin/addProduct/AddProduct';
import styles from './Admin.module.scss'

const Admin = () => {
  return (
    <>
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar/ >
     
      <div className={styles.content}>
        <Routes>

          <Route path="/admin/home/*" element={<HomeA />} />
          <Route path="admin/all-products" element={<ViewProduct />} />
          <Route path="admin/add-product" element={<AddProduct/>} />
          <Route path="admin/orders" element={<Orders />} />

        </Routes>
      </div>

      </div>
    </div>
    </>
  )
}

export default Admin
