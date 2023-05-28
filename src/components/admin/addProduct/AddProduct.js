import { useState } from 'react'
import Navbar from '../navbar/Navbar';

const AddProduct = () => {

 const [product, setProduct] = useState(
    {
      name: "",
      imageUrl: "",
      price: null,
      category: "",
      brand: ""
    }
  )

  const handleInputChange=(e)=>{};
  const handleImageChange=(e)=>{};

  return (
    <div>
     
     <h1>Add new product</h1> 

     <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Product name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" 
    placeholder="Product name"
    required name='name' value={product.name}
    onChange={(e)=>handleInputChange(e)}/>
  </div>
 
</form>
    </div>
  )
}

export default AddProduct
