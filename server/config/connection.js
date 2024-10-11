const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
/* DEPRECIATED  
  useNewUrlParser: true,
  useUnifiedTopology: true, */
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Export connection
module.exports = mongoose.connection;
