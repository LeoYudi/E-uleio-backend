const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Product = require('../models/Product');
const Category = require('../models/Category');

const connection = new Sequelize(dbConfig);

connection.authenticate().
  then(() => console.log('Connected to the database...'))
  .catch((error) => console.log(error));

Product.init(connection);
Category.init(connection);

module.exports = connection;