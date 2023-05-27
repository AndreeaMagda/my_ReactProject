import React from 'react'
import Navbar from '../../components/admin/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomeA from '../../components/admin/home/Home'
import ViewProduct from '../../components/admin/viewProduct/ViewProduct'
import Oders from '../../components/admin/oders/Oders'
import AddProduct from '../../components/admin/addProduct/AddProduct';
import styles from './Admin.module.scss'

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div  className={styles.navbar}>
         <Navbar/>
      </div>
     <div  className={styles.content}>
      <Routes>
<Route path="/home" element={<HomeA/>} />
<Route path="all-product" element={<ViewProduct/>} />
<Route path="add-product" element={<AddProduct/>} />
<Route path="oders" element={<Oders/>} />

      </Routes>
     </div>
    </div>
  )
}

export default Admin
