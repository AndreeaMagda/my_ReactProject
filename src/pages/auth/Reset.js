import React, { useState } from 'react'
import resetImg from '../../Images/resetImg.jpg'
import { Link} from 'react-router-dom'
import {  sendPasswordResetEmail} from "firebase/auth";
import { auth } from '../../firebase/config'
import {ToastContainer, toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'


const Reset = () => {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState("")

       
       const resetPassword=(e)=>{
        e.preventDefault()

        alert(email);
        setIsLoading(true)


        sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
  toast.success("Check your email for a reset link")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
       };
       
        
    return (
        <React.Fragment>
            {isLoading && <Loader/>}
             <ToastContainer />
          
            <section className='login'>
                <div className='container mt-4 '>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col '>
                                <img className='img-thumbnail' src={resetImg} alt="err resetimg " width="400" />
                            </div>
                            <div className='col card border-danger mb-5'>
                                <h2 className='text-center text-danger'>Reset Password </h2>
                                <form onSubmit={resetPassword}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                          required value={email}
                                          onChange={(e) => setEmail(e.target.value)}  />
                                      
                                    </div>
                                   

                                    <button type="submit" className="btn btn-lmd btn-primary btn-block ">Reset password</button>
                                   <div className='text-center ' >
                                    <p  >
                                    <Link to='/login'>Login</Link>
                                    </p>
                                    <p   >
                                    <Link   to='/register'>Register</Link> 
                                    </p>
                                  </div>
                                   
                                   
                                   
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
        </React.Fragment>
    
    )

    
}


export default Reset


