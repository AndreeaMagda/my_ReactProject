import React from 'react'
import {Link} from 'react-router-dom'
let contact = () => {
  return (
    <React.Fragment>
        <section className='container-serch p-3'>
            <div className='continer'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3'>Harry Potter fans
                            <Link to={'/contact/add'} className='btn btn-primary ms-2'>
                                <i className='fa fa-plus-circle me-2'/>New
                            </Link>
                            </p>
                            <p className='fst-italic'>Add your favorite character
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form>

                            </form>

                        </div>
                         
                    </div>
                </div>

            </div>

        </section>
    </React.Fragment>
  )
}

export default contact
