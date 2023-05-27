import React from 'react'
import hp from '../../Images/title.png'
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute'
const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className='grid'>
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <img src={hp} className="img-fluid rounded mx-auto d-block" alt="Responsive image" />
            </div>
          </div>
          <div className="row justify-content-md-center ">
            <div className="col-md-auto">
            </div>
          </div>
        </div>
      </div>
      <AdminOnlyRoute/>
    </React.Fragment>
  )
}

export default Home
