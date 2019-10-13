import React from 'react';
import PropTypes from 'prop-types';

import Cat from './Cat.jsx';
import Loading from './Loading.jsx';

const CatsList = ({
  images,
  handleFavourite,
  handleNext,
  handlePrev,
  showBtns,
}) => (
  // <div className="cat-list-container">
  <>
    {images.length ? (
      <div>
        {showBtns ? (
          <div className="button-group">
            <button type="button" onClick={handlePrev}>
              PREV
            </button>
            <button type="button" onClick={handleNext}>
              NEXT
            </button>
          </div>
        ) : (
          <div />
        )}
        <div className="cat-list-container">
          {images.map((info, index) => (
            <Cat
              key={index}
              info={info}
              handleFavourite={handleFavourite}
              index={index}
            />
          ))}
        </div>
      </div>
    ) : (
      <Loading />
    )}
  </>
  // </div>
);

CatsList.propTypes = {
  images: PropTypes.array,
  handleFavourite: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  showBtns: PropTypes.bool,
};

export default CatsList;
