import React from 'react'
import Navbar from '../../components/admin/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomeAdmin from '../../components/admin/home/Home'
import ViewProduct from '../../components/admin/viewProduct/ViewProduct'
import Oders from '../../components/admin/oders/Oders'
import AddProduct from '../../components/admin/addProduct/AddProduct'

const Admin = () => {
  return (
    <div>
      <div>
         <Navbar/>
      </div>
     <div>
      <Routes>
<Route path="Home" element={<HomeAdmin/>} />
<Route path="all-product" element={<ViewProduct/>} />
<Route path="add-product" element={<AddProduct/>} />
<Route path="oders" element={<Oders/>} />

      </Routes>
     </div>
    </div>
  )
}

export default Admin
