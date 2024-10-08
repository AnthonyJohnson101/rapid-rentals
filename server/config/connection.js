const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://tonyj101:gNvS5McBedXxmpBx@msu.a8hmq7j.mongodb.net/rapid-rentals?retryWrites=true&w=majority', {
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
