import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import logo from '../logo.png';



const Navbar = (props) => {
  return (

      <div className="container">
        <div className="row header-top">
          <div className="col-md-2 logo-wrapper">
              <Link className="brand-logo" to="/"><img src={logo} alt="" /></Link>
          </div>
                  <div className="col-md-10 logo-wrapper">
          <nav className="nav-wrapper">
            <ul>
              <li><NavLink exact to="/">Accueil</NavLink></li>
              <li><NavLink to='/nos-services'>Nos services</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav> 
        </div>
        </div>


      </div>

  )
}

export default withRouter(Navbar)