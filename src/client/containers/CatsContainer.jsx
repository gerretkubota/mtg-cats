import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import CatsList from '../components/CatsList/CatsList.jsx';

const CatsContainer = ({
  cats,
  favourites,
  handleFavourite,
  handleNext,
  handlePrev,
  loading,
}) => (
  <>
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
            loading={loading}
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
            loading={loading}
            showBtns={false}
          />
        )}
      />
    </Switch>
  </>
);

CatsContainer.propTypes = {
  cats: PropTypes.array,
  favourites: PropTypes.array,
  handleFavourite: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  loading: PropTypes.bool,
  showBtns: PropTypes.bool,
};

export default CatsContainer;
