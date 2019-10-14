import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLinks = ({ showBtns, handlePrev, handleNext }) => (
  <div className="nav-links">
    <ul className="nav-list">
      {showBtns ? (
        <li>
          <button type="button" onClick={handlePrev}>
            PREV
          </button>
        </li>
      ) : null}
      <li className={showBtns ? '' : 'remove'}>
        <Link to="/">Cat Images</Link>
      </li>
      <li>/</li>
      <li className={showBtns ? 'remove' : ''}>
        <Link to="/favourites">Favourites</Link>
      </li>
      {showBtns ? (
        <li>
          <button type="button" onClick={handleNext}>
            NEXT
          </button>
        </li>
      ) : null}
    </ul>
  </div>
);

NavLinks.propTypes = {
  showBtns: PropTypes.bool,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
};

export default NavLinks;
