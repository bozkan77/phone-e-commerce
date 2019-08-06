import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Logo
import Logo from '../img/cell-store.png'
// custom components
import Button from './Button';

 class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expan-sm">
          <Link to='/' >
            <img src={Logo} className='logo' alt="Logo"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5 title-text">Ürünler</li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <Button text='Sepetim' className='btn btn-dark"' fontClassName="fa fa-cart-plus mr-2"/>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;