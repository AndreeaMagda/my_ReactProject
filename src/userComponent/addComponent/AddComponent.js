import React from 'react'
import './add.css'
import { Link } from 'react-router-dom'
let AddComponent = () => {
    return (
        <div className='bg-add' >
            <React.Fragment>
                <section className='add-contact p-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <p className='h3 text-succes fw-bold p-3'>
                                    Add your fav character
                                </p>
                                <p className='fst-italic'>
                                    Here you cand add your fav character
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <form>
                                    <div className='mb-2'>
                                        <input type='text' className='form-control' placeholder='Character Name' />
                                    </div>
                                    <div className='mb-2'>
                                    <input type='email' className='form-control' placeholder='Photo url' />
                                    </div>
                                    <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='User Name' />
                                    </div>
                                    <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Favorite movie' />
                                    </div>
                                    <div className='mb-2'>
                                    <input type='email' className='form-control' placeholder='Email' />
                                    </div>
                                    <div className='mb-2'>
                                        <input type='submit' className='btn btn-success' value='Create' />
                                         <Link to={'/contact'} className='btn btn-dark  ms-2'> Cancel</Link>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>


                </section>
            </React.Fragment>
        </div>
    )
}

export default AddComponent
