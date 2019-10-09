const imageSearch = 'https://api.thecatapi.com/v1/images/search';
const axios = require('axios');

const { API_KEY } = process.env;
const rand = Math.floor(Math.random() * 1000) + 1;
const sub_id = `user_${rand}`;

module.exports = {
  images: (req, res) => {
    const url = `${imageSearch}?limit=5&ord=Random&appid=${API_KEY}`;

    axios
      .get(url)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(400).send(err));
  },
  favorites: (req, res) => {},
};
