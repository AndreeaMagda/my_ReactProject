import { useState } from 'react'
import Navbar from '../navbar/Navbar';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import {  useNavigate } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

const categories = [
  { id: 1, name: "Chlotes" },
  { id: 2, name: "Toys" },
  { id: 3, name: "Jewelry" },

];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
 
};
const AddProduct = () => {
  const [product, setProduct] = useState(
    {
     ...initialState
  
    }
  )

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    //console.log(file);
    const storageRef = ref(storage, `harryShop/${Date.now}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
   // console.log(product);
      setIsLoading(true);
    try {
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });

      toast.success("Product uploaded successfully.");
      navigate("admin/all-product");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <>
    {isLoading &&<Loader/>}
    <div>

      <h1>Add new product</h1>

      <form onSubmit={addProduct}>
        <div className="form-row">
          <div className="col-md-4 ">
            <label>Insert product name</label>
            <input type="text" className="form-control" placeholder="Product name"
              required name='name'
              value={product.name}
              onChange={(e) => handleInputChange(e)} />
            <br />


            <label>Choose product image</label>
            <div className="custom-file">
              <input type="file" accept="image/*" className="custom-file-input" id="validatedCustomFile"
                name="image" onChange={(e) => handleImageChange(e)} />


              <input type="text" className="form-control" placeholder="image URL"
                // required
                name='imageURL' value={product.imageURL}
                onChange={(e) => handleInputChange(e)} />
              <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
              <div className="invalid-feedback">Example invalid custom file feedback</div>
            </div>


            <br />  <br />
            <label>Insert product pice</label>
            <input type="number" className="form-control" placeholder="Product price"
              required name='price' value={product.price}
              onChange={(e) => handleInputChange(e)} />
            <br />


            <label>Select product category</label>
            <select required name='category' value={product.category} onChange={(e) => handleInputChange(e)} className="custom-select">
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
            <button type="submit" className="btn btn-success">Add product</button>

          </div>

        </div>

      </form>
    </div>
    </>
  )
}

export default AddProduct
