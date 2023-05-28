import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/config'
import styles from '../viewProduct/ViewProduct.module.scss'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const ViewProduct= () => {
const [products,setProducts]=useState([])
const [isLoading,setIsLoading]=useState(false)

useEffect(() => {
  getProducts();
}, []);

const getProducts=()=>{
  setIsLoading(true)

  try{
    const productsRef = collection(db, "products");
    const q = query(productsRef, orderBy("createdAt", "desc"));

    
 onSnapshot(q, (snapshot) => {
//console.log(snapshot.docs)
  const allProducts=snapshot.docs.map((doc)=>({
    id:doc.id,
    ...doc.data(),

  }));
  console.log(allProducts)
  setProducts(allProducts)
  setIsLoading(false);
 
});
  } catch(error)
{
  setIsLoading(false)
  toast.error(error.message)
}
}


  return (
    <>
     
     {isLoading && <Loader />}
      <div className={styles.table}>
        <h2>All Products</h2>

        {products.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {products.map((product, index) => {
              const { id, name, price, imageURL, category } = product;
              return (
                <tbody>
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`$${price}`}</td>
                     <td className={styles.icons}>
                      <Link to="/admin/add-product">
                        <FaEdit size={20} color="blue" />
                      </Link>
                      &nbsp;
                      <FaTrashAlt
                        size={18}
                        color="red"
                        //onClick={() => confirmDelete(id, imageURL)}
                      />
                    </td> 
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </>
  )
}

export default ViewProduct
