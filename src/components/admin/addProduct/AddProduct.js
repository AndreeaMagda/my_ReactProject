import { useState } from 'react'
import Navbar from '../navbar/Navbar';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { selectProducts } from '../../../redux/slice/productSlice';
import { useSelector } from 'react-redux';
import {imhAdd} from '../../../Images/hadd.png'
import { Col, Row } from 'react-bootstrap';
const categories = [
  { id: 1, name: "Clothes" },
  { id: 2, name: "Toys" },
  { id: 3, name: "Jewelry" },
  { id: 3, name: "Wands" },

];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  desc: "",

};
const AddProduct = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);  
  const productEdit = products.find((item) => item.id === id);
  const [product, setProduct] = useState(() => {
    const newState = detectForm(id, { ...initialState }, productEdit);
    return newState;
  }
  )

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
 

 //console.log(productEdit);

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
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });

      toast.success("Product uploaded successfully.");
      navigate("/admin/all-products");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }
  const editProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (product.imageURL !== productEdit.imageURL) {
      const storageRef = ref(storage, productEdit.imageURL);
      deleteObject(storageRef);
    }

    try {
      setDoc(doc(db, "products", id), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        editedAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      toast.success("Product Edited Successfully");
      navigate("/admin/all-products");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div>

       <h2>{detectForm(id, "Add New Product", "Edit Product")}</h2>

        <form onSubmit={detectForm(id, addProduct, editProduct)}>
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
              </select> <br /><br />
              <div className="input-group">

                <div className="input-group-prepend">
                  <span className="input-group-text">Description </span>
                </div>
                <textarea className="form-control" aria-label="With textarea"
                  name="desc"
                  required
                  value={product.desc}
                  onChange={(e) => handleInputChange(e)}></textarea>
              </div>

              <br /> <br />
              <button type="submit" className="btn btn-success">
               { detectForm(id, "Add Product", "Edit Product")}</button>

            </div>

           
              
       
            </div>

        </form>

      </div>
    </>
  )
}

export default AddProduct
