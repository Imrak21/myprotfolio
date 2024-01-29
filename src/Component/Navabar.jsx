import React from 'react'
import Navbar from '../Css/Navbar.css';
export default function Navabar() {
  return (
    <nav id='navbar'>
       <div className="row container-fluid justify-content-between m-0 p-0 align-content-center">
          <div className="col-1 text-white">
            <h3 className='navbar-brand' id='navname'>Rakesh</h3>
          </div>
          <div className="col-4 text-white">
            <ul className='list-group list-group-horizontal list-unstyled d-flex justify-content-between '>
              <li>Services</li>
              <li>Protfolio</li>
              <li>About</li>
              <li>Contact Me</li>
            </ul>
          </div>
          <div className="col-2 text-end text-white">
            <button id='cvbtn'>Download CV</button>
          </div>
        </div> 
    </nav>
  )
}
