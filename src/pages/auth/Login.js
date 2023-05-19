import React from 'react'
import styles from './auth.modules.scss'
import loginImg from '../../Images/loginImg.jpg'
import { Link } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
const Login = () => {
    return (
        <React.Fragment>
            <section className='login'>
                <div className='container mt-4'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col '>
                                <img  className='img-thumbnail'   src={loginImg} alt="errimglg " width="400" />
                            </div>
                            <div className='col card border-danger mb-2'>
                                <h2 className='text-center text-danger'>Login </h2>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                  
                                    <button type="submit" className="btn btn-lmd btn-primary btn-block ">Submit</button>
                                    <Link to='/reset'>Reset Password</Link>
                                    <p className='text-center font-weight-bold'>---or---</p>
                                    <button type="google" className="btn btn-lmd btn-info btn-block"><FaGoogle color='#000'/>Login with  Google</button>
                                    <p> Don't have an account?<Link to={'/register'}>register here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </React.Fragment>
    )
}

export default Login


