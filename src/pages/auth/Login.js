import React, { useState } from 'react'
import styles from './auth.modules.scss'
import loginImg from '../../Images/loginImg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config'
import {ToastContainer, toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState("")

    const navigate=useNavigate()


    const loginUser = (e) => {

        e.preventDefault()
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setIsLoading(false)
                toast.success("Login successful :)")
                navigate('/home')

            })
            .catch((error) => { 
                setIsLoading(false)
                toast.error(error.message)
            });

  
    }

     //login with google
   const provider = new GoogleAuthProvider();
   const signInWithGoogle =()=>{
       signInWithPopup(auth, provider)
       .then((result) => {
         const user = result.user;
         toast.success("login successfully")
         navigate("/home")
        
       }).catch((error) => {
        toast.error(error.message)
       });
       
       
       
       
        };
    return (
        <React.Fragment>
             <ToastContainer />
          
            <section className='login'>
                <div className='container mt-4'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col '>
                                <img className='img-thumbnail' src={loginImg} alt="errimglg " width="400" />
                            </div>
                            <div className='col card border-danger mb-2'>
                                <h2 className='text-center text-danger'>Login </h2>
                                <form onSubmit={loginUser}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                            required value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                            required value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <button type="submit" className="btn btn-lmd btn-primary btn-block ">Submit</button>
                                    <Link to='/reset'>Reset Password</Link>
                                    <p className='text-center font-weight-bold'>---or---</p>
                                    <button type="google" className="btn btn-lmd btn-info btn-block" onClick={signInWithGoogle}><FaGoogle color='#000' />Login with  Google</button>
                                    <p> Don't have an account?<Link to={'/register'}>register here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
                {isLoading && <Loader/>}
        </React.Fragment>
    )
}

export default Login


