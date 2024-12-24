const canoes = [
  { name: 'Canoe A', stock: 10, pricing: 50, time: 2, location: 'Lake A' },
  { name: 'Canoe B', stock: 5, pricing: 40, time: 3, location: 'Lake B' },
];

const paddles = [
  { name: 'Paddle A', stock: 20, pricing: 10, time: 1, location: 'Lake A' },
  { name: 'Paddle B', stock: 15, pricing: 8, time: 1, location: 'Lake B' },
];

const jackets = [
  { name: 'Jacket A', stock: 30, pricing: 5, time: 1, location: 'Lake A' },
  { name: 'Jacket B', stock: 25, pricing: 4, time: 1, location: 'Lake B' },
];

const appDescriptions = [

];

// Export the data for use in seed.js
module.exports = { canoes, paddles, jackets };
