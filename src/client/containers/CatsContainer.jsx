import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import CatsList from '../components/CatsList.jsx';

const CatsContainer = ({
  cats,
  favourites,
  handleFavourite,
  handleNext,
  handlePrev,
}) => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <CatsList
            key="cats"
            {...props}
            images={cats}
            handleFavourite={handleFavourite}
            handleNext={handleNext}
            handlePrev={handlePrev}
            showBtns
          />
        )}
      />
      <Route
        path="/favourites"
        render={props => (
          <CatsList
            key="favourites"
            {...props}
            images={favourites}
            handleFavourite={handleFavourite}
            showBtns={false}
          />
        )}
      />
    </Switch>
  </div>
);

CatsContainer.propTypes = {
  cats: PropTypes.array,
  favourites: PropTypes.array,
  handleFavourite: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
};

export default CatsContainer;
