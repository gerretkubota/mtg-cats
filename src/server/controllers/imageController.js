const imageSearchUrl = 'https://api.thecatapi.com/v1/images/search';
const favouritesUrl = 'https://api.thecatapi.com/v1/favourites';
const axios = require('axios');

const { API_KEY } = process.env;
const user = 'motortrend';

module.exports = {
  /**
   * allImages will retrieve 100 images on a page (which is passed from client side) -
   * under the user's account which will also determine if that image has already been favourited -
   * and will be displayed in ascending order
   */
  allImages: (req, res) => {
    const { page } = req.params;
    const url = `${imageSearchUrl}?sub_id=${user}&limit=100&page=${page}&order=asc&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  /**
   * allFavourites will retrieve all of the user's favourites
   */
  allFavourites: (req, res) => {
    const url = `${favouritesUrl}?sub_id=${user}&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  /**
   * favouriteAnImage will make a post call to update/favourite an image -
   * with the user's account and the image id
   */
  favouriteAnImage: (req, res) => {
    const url = `${favouritesUrl}?api_key=${API_KEY}`;
    const info = { image_id: req.body.image_id, sub_id: user };

    axios
      .post(url, info)
      .then(success => res.status(200).send(success.data))
      .catch(err => res.status(400).send(err));
  },
  /**
   * deleteFavourite will delete the favourited image by passing -
   * the favourite id from the client side
   */
  deleteFavourite: (req, res) => {
    const { favourite_id } = req.params;
    const url = `${favouritesUrl}/${favourite_id}?api_key=${API_KEY}`;

    axios
      .delete(url)
      .then(success => res.status(200).send('deleted'))
      .catch(err => res.status(400).send(err));
  },
  /**
   * oneFavourite will retrieve a favourited image by passing -
   * the favourite id from the client side
   */
  oneFavourite: (req, res) => {
    const { favourite_id } = req.params;
    const url = `${favouritesUrl}/${favourite_id}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then(success => res.status(200).send(success.data))
      .catch(err => res.status(400).send(err));
  },
};
