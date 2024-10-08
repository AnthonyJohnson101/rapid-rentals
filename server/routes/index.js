const router = require('express').Router();
const apiRoutes = require('./api');
const book = require('../controllers/bookingController');

// Define the booking route
router.route('/booking').post(book.BookingController);

// Use the API routes under the /api path
router.use('/api', apiRoutes);

// Handle any undefined routes with a 404 response
router.use((req, res) => {
    res.status(404).json({ message: 'Wrong route!' });
});

// Optional: Add a centralized error handling middleware
// This should be added after all routes
router.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({ message: 'Internal server error' });
});

module.exports = router;

