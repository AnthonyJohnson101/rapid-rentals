/* const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

db.once('open', () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); */

const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// Serve static files
app.use(express.static(path.join(__dirname, 'client/public')));

//handle wildcard
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

db.once('open', () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});