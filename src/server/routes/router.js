const imageController = require('../controllers/imageController.js');

/**
 * @param {express} app
 * When a HTTP request is made on the client side, it will request -
 * one of the many RESTful API route
 */

module.exports = app => {
  app.get('/api/images/:page', imageController.allImages);
  app.get('/api/myfavourites', imageController.allFavourites);
  app.get('/api/favourite/:favourite_id', imageController.oneFavourite);
  app.post('/api/favourite', imageController.favouriteAnImage);
  app.delete('/api/unfavourite/:favourite_id', imageController.deleteFavourite);
};
