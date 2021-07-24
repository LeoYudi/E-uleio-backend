const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Product = require('../models/Product');
const Category = require('../models/Category');
const Publisher = require('../models/Publisher');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

connection.authenticate().
  then(() => console.log('Connected to the database...'))
  .catch((error) => console.log(error));

Product.init(connection);
Category.init(connection);
Publisher.init(connection);
User.init(connection);

Category.associate(connection.models);
Publisher.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;