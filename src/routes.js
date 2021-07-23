const express = require('express');
const ProductController = require('./Controllers/ProductController');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.status(200).json('Rota inicial');
});

routes.post('/products', ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products', ProductController.edit);
routes.delete('/products', ProductController.delete);


module.exports = routes;