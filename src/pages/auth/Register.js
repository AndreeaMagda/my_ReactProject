import React, { useState } from 'react'
import {  toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../../Images//registerImg.jpeg'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/config'
import { Loader } from 'semantic-ui-react';
//import  {Loader} from '../../components/loader/Loader'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState("")

const navigate=useNavigate()

  const registerUser=(e)=>{
    e.preventDefault();
    if(password !== cPassword){
       toast.error("Password not match.")
    }

   setIsLoading(true) 
   
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false)
    toast.success("Registration successful...")
    navigate("/login ")
    
  })
  .catch((error) => {
   
   toast.error(error.message)
   setIsLoading(false)
  });
  }

  return (
    <React.Fragment>
       
        {isLoading && <Loader/>}
      <section className='login'>
        <div className='container  mt-4 mt-4'>
          <div className='grid'>
            <div className='row'>
              <div className='col card border-danger mb-2 center'>
                <h2 className='text-center text-danger'>Register </h2>
                <form onSubmit={registerUser}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"
                      className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required value={email}
                      onChange={(e) =>setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" id="exampleInputPassword1"
                     placeholder="Password" 
                     required value={password}
                     onChange={(e) =>setPassword(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1"> Confirm Password</label>
                    <input type="password" 
                    className="form-control" id="exampleInputPassword1"
                     placeholder="Password"
                     required value={cPassword}
                     onChange={(e) =>setCPassword(e.target.value)} />
                  </div>

                  <button type="submit" className="btn btn-lmd btn-primary btn-block ">Submit</button>
                  <Link to='/login'>Already have an account? Login </Link>

                </form>
              </div>
              <div className='col xs={12}'>
                <img className='img-thumbnail' src={registerImg} alt="errimglg " width="400" />
              </div>

            </div>
          </div>

        </div>


      </section>
    </React.Fragment>
  )
}

export default Register
