import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <div className="nav-links">
    <ul className="nav-list">
      <li>
        <Link to="/">Cat Images</Link>
      </li>
      <li>/</li>
      <li>
        <Link to="/favourites">Favourites</Link>
      </li>
    </ul>
  </div>
);

export default NavLinks;
