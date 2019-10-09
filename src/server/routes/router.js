const imageController = require('../controllers/imageController.js');

module.exports = app => {
  app.get('/images', imageController.allImages);
  app.get('/favorites', imageController.allFavorites);
  app.post('/favorite', imageController.favoriteAnImage);
  app.delete('/favorite', imageController.deleteFavorite);
};

/*
{
	"image_id": "9ccXTANkb",
	"sub_id": "user-802"
}
*/
