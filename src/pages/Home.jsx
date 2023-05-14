import React from 'react'
import './Home.css'
import Helmet from '../components/Helmet/Helmet'
import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import homeImg1 from '../Images/homeImg1.jpg' 
import homeImg2 from '../Images/homeImg2.webp' 


function Home() {
  return (
    <>
      <Helmet title={"Home"}></Helmet>
      <div className='bg-color'>
        <section className="home-section">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='home-content'>
                  <h2 className='home-subtitle'>Welcome to Harry Potter world!🪄</h2>
                  <p>Welcome to my own Harry Potter  website! Here you will find a magical world
                    filled with everything you need to satisfy your love of the wizarding world.</p>
                   <p> I have a shop section which  is filled with a variety of Harry Potter merchandise, including wizarding 
                    wands, robes, collectibles, jewelry, and much more. You will find items for fans of all
                     ages, from children to adults.</p> 
                     <button type="button" class="btn btn-primary" style={{ backgroundColor: '#70b1cd' }}>
                      <Link to={'shop'} ><h1 className='btn-style'>Shop</h1></Link></button>
                </div>
              </Col>

          <Col lg='6' md='6' >
            <div className='home-img1'>
              <img className='img1' src={homeImg1} alt='error homeImg1'/>

            </div>
          </Col>
            </Row>

            
          </Container>

        </section>


        <section className="home-section2">
          <Container>
            <Row>
              <Col lg='6' md='6'>
              <div className='home-img1'>
              <img className='img2' src={homeImg2} alt='error homeImg2'/>

                </div>
              </Col>

          <Col lg='6' md='6' >    <div className='home-content'>
                  <h2 className='home-subtitle'>Books and movies</h2>
                  <p>On our website, you will find detailed information on both the books and movies
                     that make up the Harry Potter universe. From character bios to behind-the-scenes 
                     trivia, we have everything you need to delve deeper into the world of Harry Potter.</p>
                   <p> Idelve deepe</p> 
                  
                   <button type="button" class="btn btn-primary" style={{ backgroundColor: '#8365c8' }}>
                      <Link to={'books'} ><h1 className='btn-style'>Books </h1></Link>
                      </button>
                      <button type="button" class="btn btn-primary btn-rounded" style={{ backgroundColor: '#552cb5' }}>
                      <Link to={'movies'} ><h1 className='btn-style'>Movies </h1></Link>
                      </button>
          
          
            </div>
          </Col>
            </Row>

            
          </Container>

          

        </section>
       
      </div> </>
  )

}



export default Home;
