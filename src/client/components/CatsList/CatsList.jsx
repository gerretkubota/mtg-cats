import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Cat from '../Cat/Cat.jsx';
import NavLinks from '../NavLinks/NavLinks.jsx';

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
  // This will the viewport of the CatsList to go back to the top
  // useEffect will be invoked if the loading status changes
  // the loading status change happens when the user goes to a prev or next page
  useEffect(() => {
    scrollNode.current.scrollTop = 0;
    scrollNode.current.focus();
  }, [loading]);

  return (
    <div className="outer-cat-list-container">
      <NavLinks
        showBtns={showBtns}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
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
    </div>
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
