import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      
<section>
          <div class="row first">
            <div class="col-6 c1">
              <div class="container mt-4">
                <h5>Get Your Free</h5>
                <h1>Issue Tracking Template</h1>
                <h3>Get a Issue Tracking Template for Excel or <br />
                  open it in ProjectManager, the best way to <br />
                  manage your projects online.
                </h3>
                <button className='btn btn-secondary'>Open In ProjectManager</button><span>     </span>
                <button className='btn btn-primary'>Download Excel File</button>
              </div>
            </div>
            <div className="col-5 c2">
              <div className="image">
                <img src="https://media.istockphoto.com/photos/businessman-at-work-picture-id1226856056?k=20&m=1226856056&s=612x612&w=0&h=_pGgpiSEu24K41AvV5naEbeoDG0iglXswvqB-RzjWZU=" alt=""/>
              </div>
            </div>
          </div>
          </section>

      
      <div className='container mt-4 divider'></div>
      {/* <!-- Intro settings --> */}


      {/* <!-- Navbar --> */}

      {/* <!-- Navbar --> */}

      {/* <!-- Background image --> */}
      {/* <div

          id="intro-example"
          className="p-5 text-center bg-image">

          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-black">
                <h1 className="mb-3">Hello Developer!</h1>
                <h5 className="mb-4">Now you can,keep the track of your projects</h5>
                <br></br>
                <br></br>
                <h6>Not a member? kindly sign in.</h6>


                <NavLink
                  className="btn btn-dark btn-lg m-2 text-white"
                  to='/SignUp'
                  role="button"
                  rel="nofollow"


                ></NavLink>

              </div>
            </div>
          </div>
        </div> */}

      {/* <!-- Background image --> */}
      <section>
        <div class="container row mt-4 items">
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
       

      </section>
      <div className='container mb-4 divider'></div>





    </div>
  )
}

export default Home