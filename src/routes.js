const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const authMiddleware = require('./middlewares/auth');

routes.get('/', (req, res) => {
  return res.status(200).json('Rota inicial');
});

routes.post('/login', UserController.login);
routes.post('/users', UserController.save);
routes.get('/users', authMiddleware, UserController.list);
routes.put('/users', authMiddleware, UserController.edit);
routes.delete('/users', authMiddleware, UserController.delete);

module.exports = routes;