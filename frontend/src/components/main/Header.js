import React from "react";
import "./css/Header.css"
import logo from '../../Assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <div className='navbar header'>

      <div className='logo'>
        <img alt="logo" src={logo} />
      </div>
      <div className="navManu">
        <div class="row">
          <div class="col-lg-12">
            <ul class="list-unstyled d-flex justify-content-between">
              <li class="col-lg-3">item</li>
              <li class="col-lg-3">item</li>
              <li class="col-lg-3">item</li>
              <li class="col-lg-3">item</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='search'>
        <div className='searchbox'>
          <input className='searchInput' type='text' />
          <button className='searchBtn'>search</button>
          <FontAwesomeIcon icon="fa-regular fa-user" />
        </div>

      </div>
      <div className='profile'>
        <img alt="profile" src={process.env.PUBLIC_URL + '/images/profile.jpg'} />
      </div>
    </div>
  )
}
export default Header;