const connection = require('../config/connection');
const { Canoe } = require('../models');
const { Paddle } = require('../models');
const { Jacket } = require('../models');
const { canoes, paddles, jackets } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing canoes, paddles, and jackets
  await Canoe.deleteMany({});
  await Paddle.deleteMany({});
  await Jacket.deleteMany({});

  // Seed the database
  await Canoe.insertMany(canoes);
  await Paddle.insertMany(paddles);
  await Jacket.insertMany(jackets);

  console.log('Database seeded!');
  process.exit(0);
});
