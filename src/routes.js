const express = require('express');
const multer = require('multer');
const CategoryController = require('./Controllers/CategoryController');
const ProductController = require('./Controllers/ProductController');
const PublisherController = require('./Controllers/PublisherController');
const UserController = require('./controllers/UserController');

const multerConfig = require('./middlewares/multerConfig');
const routes = express.Router();
const authMiddleware = require('./middlewares/auth');

routes.get('/', (req, res) => {
  return res.status(200).json('Rota inicial');
});

routes.post('/products', authMiddleware, multer(multerConfig).single('image'), ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products/:id_product', authMiddleware, multer(multerConfig).single('image'), ProductController.edit);
routes.delete('/products/:id_product', authMiddleware, ProductController.delete);

routes.post('/categories', authMiddleware, CategoryController.save);
routes.get('/categories', CategoryController.list);
routes.put('/categories/:id_category', authMiddleware, CategoryController.edit);
routes.delete('/categories/:id_category', authMiddleware, CategoryController.delete);

routes.post('/publisher', authMiddleware, PublisherController.save);
routes.get('/publisher', PublisherController.list);
routes.put('/publisher/:id_publisher', authMiddleware, PublisherController.edit);
routes.delete('/publisher/:id_publisher', authMiddleware, PublisherController.delete);

routes.post('/login', UserController.login);
routes.post('/users', UserController.save);
routes.get('/users', authMiddleware, UserController.list);
routes.put('/users', authMiddleware, UserController.edit);
routes.delete('/users', authMiddleware, UserController.delete);

module.exports = routes;