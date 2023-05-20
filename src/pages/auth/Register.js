import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import registerImg from '../../Images//registerImg.jpeg'

const Register = () => {
  const [email, setEmail] = useState("")
  const [passowrd, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const registerUser=(e)=>{
    e.preventDefault();
    if(passowrd !=cPassword){
       toast.error("Passowrd not match.")
    }
  }

  return (
    <React.Fragment>
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
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" id="exampleInputPassword1"
                     placeholder="Password" 
                     required value={passowrd}
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
                  <Link to='/login'>Alrrady an account? Login </Link>

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
