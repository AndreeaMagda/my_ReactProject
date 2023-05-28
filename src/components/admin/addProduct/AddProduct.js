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
     <div className="form-row">
    <div className="col-md-4 ">
      <input type="text" class="form-control" placeholder="First name"
    required name='name' value={product.name}
    onChange={(e)=>handleInputChange(e)}/>
  </div>
  </div>
 
</form>
    </div>
  )
}

export default AddProduct
