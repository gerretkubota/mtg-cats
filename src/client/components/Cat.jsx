import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading.jsx';

const Cat = ({ info, index, handleFavourite }) => (
  <>
    {/* {info ? ( */}
    <div className="cat-container">
      <div className="image-container">
        {info ? <img src={info.url} alt={info.imageID} /> : <div>Loading</div>}
      </div>
      <button type="button" onClick={() => handleFavourite(info, index)}>
        {info.favouriteID ? '<3' : '</3'}
      </button>
    </div>
    {/* ) : ( */}
    {/* <Loading /> */}
    {/* )} */}
  </>
);

Cat.propTypes = {
  info: PropTypes.object,
  handleFavourite: PropTypes.func,
  index: PropTypes.number,
};

export default Cat;
