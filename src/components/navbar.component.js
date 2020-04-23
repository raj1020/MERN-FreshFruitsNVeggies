import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav >
        <Link to="/" >Home Page</Link>
        <div>
        <ul>
          <li>
          <Link to="/products">Available Products</Link>
          </li>
          <li>
          <Link to="/aboutus">About Us</Link>
          </li>
          <li>
          <Link to="/contact">Contact Us</Link>
          </li>
          <li>
          <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}