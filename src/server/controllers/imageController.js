const imageSearchUrl = 'https://api.thecatapi.com/v1/images/search';
const favouritesUrl = 'https://api.thecatapi.com/v1/favourites';
const axios = require('axios');

const { API_KEY } = process.env;
const rand = Math.floor(Math.random() * 1000) + 1;
const _subid = `user_${rand}`;
const user = 'User-626';
console.log(_subid);

module.exports = {
  allImages: (req, res) => {
    const { page } = req.params;
    const url = `${imageSearchUrl}?sub_id=${user}&limit=100&page=${page}&order=asc&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  allFavourites: (req, res) => {
    const url = `${favouritesUrl}?sub_id=${user}&api_key=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  favouriteAnImage: (req, res) => {
    const url = `${favouritesUrl}?api_key=${API_KEY}`;
    const info = { image_id: req.body.image_id, sub_id: user };

    axios
      .post(url, info)
      .then(success => res.status(200).send(success.data))
      .catch(err => res.status(400).send(err));
  },
  deleteFavourite: (req, res) => {
    const { favourite_id } = req.params;
    const url = `${favouritesUrl}/${favourite_id}?api_key=${API_KEY}`;

    axios
      .delete(url)
      .then(success => res.status(200).send('deleted'))
      .catch(err => res.status(400).send(err));
  },
  oneFavourite: (req, res) => {
    const { favourite_id } = req.params;
    const url = `${favouritesUrl}/${favourite_id}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then(success => res.status(200).send(success.data))
      .catch(err => res.status(400).send(err));
  },
};
