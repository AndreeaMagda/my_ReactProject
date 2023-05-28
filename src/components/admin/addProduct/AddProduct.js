import { useState } from 'react'
import Navbar from '../navbar/Navbar';

const AddProduct = () => {
  const categories = [
    { id: 1, name: "Chlotes" },
    { id: 2, name: "Toys" },
    { id: 3, name: "Jewelry" },
 
  ];
  const [product, setProduct] = useState(
    {
      name: "",
      imageURL: "",
      price: null,
      category: "",

    }
  )

  const handleInputChange = (e) => { };
  const handleImageChange = (e) => { };

  return (
    <div>

      <h1>Add new product</h1>

      <form>
        <div className="form-row">
          <div className="col-md-4 ">
            <label>Insert product name</label>
            <input type="text" class="form-control" placeholder="Product name"
              required name='name' value={product.name}
              onChange={(e) => handleInputChange(e)} />
            <br />
            <label>Choose product image</label>

            <div class="custom-file">
              <input type="file" accept="image/*" class="custom-file-input" id="validatedCustomFile"
                name="image" onChange={(e) => handleImageChange(e)} />
              <input type="text" class="form-control" placeholder="image URL"
                required name='imageURL' value={product.imageURL}
                onChange={(e) => handleInputChange(e)} />
              <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
              <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
            <br />  <br />
            <label>Insert product pice</label>
            <input type="number" class="form-control" placeholder="Product price"
              required name='price' value={product.price}
              onChange={(e) => handleInputChange(e)} />
            <br />
            <label>Select product category</label>
            <select required name='category' value={product.category} onChange={(e) => handleInputChange(e)} class="custom-select">
              <option selected>Select</option>
              {categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
            <br /> <br />
            <button type="button" class="btn btn-success">Add product</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default AddProduct
