const imageController = require('../controllers/imageController.js');

module.exports = app => {
  app.get('/api/images/:page', imageController.allImages);
  app.get('/api/myfavourites', imageController.allFavourites);
  app.get('/api/favourite/:favourite_id', imageController.oneFavourite);
  app.post('/api/favourite', imageController.favouriteAnImage);
  app.delete('/api/unfavourite/:favourite_id', imageController.deleteFavourite);
  app.get('/*', (req, res) => res.sendFile(__dirname, './public/index.html'));
};
