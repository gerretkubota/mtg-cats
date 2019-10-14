import React, { Component } from 'react';
import axios from 'axios';

import NavLinks from './components/NavLinks.jsx';
import CatsContainer from './containers/CatsContainer.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: new Array(100).fill(null),
      favourites: [],
      currPage: 0,
      maxPage: 86,
      loading: false,
    };
  }

  /**
   * Via initial render, componentDidMount will make an API call to both the user's favourited images
   * and images of cats in a parallel matter and update the state of cats and favourites
   */
  componentDidMount() {
    const { currPage } = this.state;

    Promise.all([
      axios.get(`/api/images/${currPage}`),
      axios.get('/api/myfavourites'),
    ])
      .then(([cats, favourites]) => {
        const catsData = cats.data.map(info => ({
          imageID: info.id,
          favouriteID: info.favourite ? info.favourite.id : null,
          url: info.url,
        }));

        const favouritesData = favourites.data.map(info => ({
          imageID: info.image_id,
          favouriteID: info.id,
          url: info.image.url,
        }));

        this.setState({ cats: catsData, favourites: favouritesData });
      })
      .catch(err => alert('Could not gather images and favourites', err));
  }

  /**
   * @param {array} cats
   * Helper function that will help generate an array of objects with their
   * respective properties of imageID, favouriteID, and url
   */
  createCatsData = cats =>
    cats.map(info => ({
      imageID: info.id,
      favouriteID: info.favourite ? info.favourite.id : null,
      url: info.url,
    }));

  /**
   * React event handler that will gather another set of cat images via API call
   * and will set the new of cat images (array of objects) to the cats property
   * and increments the current page number to the state
   */
  handleNext = () => {
    const { currPage, maxPage } = this.state;
    const nextPage = currPage + 1;

    if (nextPage <= maxPage) {
      this.setState({ loading: true });
      axios
        .get(`/api/images/${nextPage}`)
        .then(result => {
          const catsData = this.createCatsData(result.data);

          this.setState({ cats: catsData, currPage: nextPage, loading: false });
        })
        .catch(err => alert('Could not gather images', err));
    } else {
      alert("You've reached the end!");
    }
  };

  /**
   * React event handler that will gather the previous page's cat images via API call
   * and will set the previous cat images (array of objects) to the cats property
   * and decreement the current page number to the state
   */
  handlePrev = () => {
    const { currPage } = this.state;
    const prevPage = currPage - 1;

    if (prevPage < 0) {
      alert("You're at the beginning already!");
    } else {
      this.setState({ loading: true });
      axios
        .get(`/api/images/${prevPage}`)
        .then(result => {
          const newCats = this.createCatsData(result.data);
          this.setState({ cats: newCats, currPage: prevPage, loading: false });
        })
        .catch(err => alert('Could not gather images', err));
    }
  };

  /**
   * @param {info} object (imageID, favouriteID, url)
   * @param {index} number
   * React event handler that will determine whether or not the current image
   * that has been clicked should be favourited or unfavourited.
   * Favouriting will make an API call to add the favourited image -
   * under the user's account as well as the client state
   * Unfavouriting will make an API call to delete the favourite image and deleting it -
   * from the client state and user's account
   */
  handleFavourite = (info, index) => {
    const { cats, favourites } = this.state;
    const currCats = cats.slice();
    const currFavourites = favourites.slice();

    if (info.favouriteID) {
      axios
        .delete(`/api/unfavourite/${info.favouriteID}`)
        .then(success => {
          const newFavourites = currFavourites.filter(
            fav => fav.favouriteID !== info.favouriteID
          );

          const found = currCats.findIndex(
            fav => fav.favouriteID === info.favouriteID
          );

          if (found >= 0) {
            currCats[found].favouriteID = null;
          }

          this.setState({ cats: currCats, favourites: newFavourites });
        })
        .catch(err => alert('Could not unfavourite', err));
    } else {
      axios
        .post('/api/favourite', { image_id: info.imageID })
        .then(fav => {
          axios
            .get(`/api/favourite/${fav.data.id}`)
            .then(result => {
              currCats[index] = {
                ...currCats[index],
                favouriteID: result.data.id,
              };
              currFavourites.push({
                imageID: result.data.image_id,
                favouriteID: result.data.id,
                url: info.url,
              });
              this.setState({ cats: currCats, favourites: currFavourites });
            })
            .catch(err => alert('Could not get favourite.', err));
        })
        .catch(err => alert('Could not favourite.', err));
    }
  };

  render() {
    const { cats, favourites, loading } = this.state;

    return (
      <div className="app-container">
        <NavLinks />
        <CatsContainer
          cats={cats}
          favourites={favourites}
          handleFavourite={this.handleFavourite}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          loading={loading}
        />
      </div>
    );
  }
}
