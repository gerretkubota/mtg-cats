const imageSearchUrl = 'https://api.thecatapi.com/v1/images/search';
const favoritesUrl = 'https://api.thecatapi.com/v1/favourites';
const axios = require('axios');

const { API_KEY } = process.env;
const rand = Math.floor(Math.random() * 1000) + 1;
const _subid = `user_${rand}`;
const user = 'User-626';
console.log(_subid);

module.exports = {
  allImages: (req, res) => {
    const url = `${imageSearchUrl}?sub_id=${user}&limit=5&order=random&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  allFavorites: (req, res) => {
    const url = `${favoritesUrl}?sub_id=${user}&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  favoriteAnImage: (req, res) => {
    const url = `${favoritesUrl}?sub_id=${user}&api_key=${API_KEY}`;

    axios
      .post(url, req.body)
      .then(success => res.status(200).send(success.data.message))
      .catch(err => res.status(400).send(err));
  },
  deleteFavorite: (req, res) => {
    const { imageId } = req.body;
    const url = `${favoritesUrl}/${imageId}?api_key=${API_KEY}`;

    axios
      .delete(url)
      .then(success => res.status(200).send(success))
      .catch(err => res.status(400).send(err));
  },
};
