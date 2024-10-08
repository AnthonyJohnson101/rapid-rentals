const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://tonyj101:t9845446@msu.a8hmq7j.mongodb.net/?retryWrites=true&w=majority&appName=MSU', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
