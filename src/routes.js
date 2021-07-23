const express = require('express');
const CategoryController = require('./Controllers/CategoryController');
const ProductController = require('./Controllers/ProductController');
const PublisherController = require('./Controllers/PublisherController');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.status(200).json('Rota inicial');
});

routes.post('/products', ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products/:id_product', ProductController.edit);
routes.delete('/products:id_product', ProductController.delete);

routes.post('/categories', CategoryController.save);
routes.get('/categories', CategoryController.list);
routes.put('/categories/:id_category', CategoryController.edit);
routes.delete('/categories:id_category', CategoryController.delete);

routes.post('/publisher', PublisherController.save);
routes.get('/publisher', PublisherController.list);
routes.put('/publisher/:id_publisher', PublisherController.edit);
routes.delete('/publisher:id_publisher', PublisherController.delete);

module.exports = routes;