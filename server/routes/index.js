const router = require('express').Router();
const apiRoutes = require('./api');
const book = require('../controllers/bookingController');
const path = require('path');

// Define the booking route
router.route('/booking').post(book.BookingController);

// Use the API routes under the /api path
router.use('/api', apiRoutes);

// Serve the React app for any other routes
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
});

//centralized error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = router;

