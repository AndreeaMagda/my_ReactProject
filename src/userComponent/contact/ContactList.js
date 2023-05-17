import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

let ContactList = () => {
    return (
        <div className='bg'>

            <React.Fragment>
                <section className='container-serch p-3'>
                    <div className='continer'>
                        <div className='grid'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='h3 fw-bold'>Harry Potter fans
                                        <Link to={'contact/add'} className='btn btn-primary ms-2'>
                                            <i className='fa fa-plus-circle me-2' />New
                                        </Link>
                                    </p>
                                    <p className='fst-italic'>Add your favorite character
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <form className='row'>
                                        <div className='col'>
                                            <div className='mb-2'>
                                                <input type='text' className='form-control' placeholder='Search your name' />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='mb-2'>
                                                <input type='submit' className='btn btn-outline-dark' value='Search' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contact-list'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='row align-items-center'>
                                        <div className='col-md-4'>
                                            <img src='https://cdn-icons-png.flaticon.com/512/195/195138.png' alt='err' className='img-fluid contact-img'/>
                                        </div>
                                        <div className='col-md-7'>
                                          <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                  Character Name: <span className='fw-bold'>Harry Potter</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                  User Name <span className='fw-bold'>Jack20</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                  Favorite movie<span className='fw-bold'>Harry Potter and the Phoneix Order</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                  Email<span className='fw-bold'>jack20@gmail.com</span>
                                            </li>

                                          </ul>
                                        </div>
                                        <div className='col-md-1 d-flex flex-column align-items-center '>
                                            <Link to={'contact/add'} className='btn btn-warning my-1'>
                                                <i className='fa fa-eye' />
                                            </Link>
                                            <Link to={'contact/edit'} className='btn btn-primary my-1'>
                                                <i className='fa fa-pen' />
                                            </Link>
                                           <button className='btn btn-danger my-1'>
                                                <i className='fa fa-trash'/>
                                           </button>
                                        </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </React.Fragment>

        </div>
    )
}

export default ContactList



