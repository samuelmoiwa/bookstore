import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav_bar">
      <div className="nav_items">
        <h1 className="book_store">Bookstore CMS</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav_links">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className="nav_links"> CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className="user_image_div">
        <img className="user_image" src="user.png" alt="" />
      </div>
    </header>
  );
}

export default Navbar;
