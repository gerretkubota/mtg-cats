import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading/Loading.jsx';
/**
 * Cat component will load an image or a loading component and the status
 * of an image is favourited or not depends on whether or not the data -
 * is currently being retrieved
 */
const Cat = ({ info, index, handleFavourite, loading }) => (
  <div className="cat-container">
    <div className="image-container">
      {loading === true || info === null ? (
        <Loading />
      ) : (
        <img src={info.url} alt={info.imageID} />
      )}
    </div>
    <button type="button" onClick={() => handleFavourite(info, index)}>
      {loading === true || info === null ? '' : info.favouriteID ? '<3' : '</3'}
    </button>
  </div>
);

Cat.propTypes = {
  info: PropTypes.object,
  handleFavourite: PropTypes.func,
  index: PropTypes.number,
  loading: PropTypes.bool,
};

export default Cat;
