import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Cat from './Cat.jsx';

const CatsList = ({
  images,
  handleFavourite,
  handleNext,
  handlePrev,
  showBtns,
  loading,
}) => {
  // Utilizing react hook to retrieve and set a functional component's ref to an element
  const scrollNode = useRef();
  const firstImage = images[0];
  // We know that the first image is always the same on a current page, so the user
  // goes to the next or previous page, the first image will be different.
  // When there are changes to the first image in the cats state this CatsList container will
  // scroll back to the top and refocus to this particular CatsList container.
  useEffect(() => {
    scrollNode.current.scrollTop = 0;
    scrollNode.current.focus();
  }, [firstImage]);

  return (
    <>
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
      <div className="cat-list-container" ref={scrollNode}>
        {images.map((info, index) => (
          <Cat
            key={index}
            info={info}
            handleFavourite={handleFavourite}
            index={index}
            loading={loading}
          />
        ))}
      </div>
    </>
  );
};

CatsList.propTypes = {
  images: PropTypes.array,
  handleFavourite: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  showBtns: PropTypes.bool,
  loading: PropTypes.bool,
};

export default CatsList;
