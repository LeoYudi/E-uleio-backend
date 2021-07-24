const express = require('express');
const routes = require('./routes');
const path = require('path');

require('./database');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});