const router = require('express').Router();
const apiRoutes = require('./api');
const book = require('../controllers/bookingController');

// Define the booking route
router.route('/booking').post(book.BookingController);

// Use the API routes under the /api path
router.use('/api', apiRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

//handle wildcard
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Handle any undefined routes with a 404 response
router.use((req, res) => {
    res.status(404).json({ message: 'Wrong route!' });
});

//centralized error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({ message: 'Internal server error' });
});

module.exports = router;

