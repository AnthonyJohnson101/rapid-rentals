const router = require('express').Router();
const canoeRoutes = require('./canoeRoutes');
const paddleRoutes = require('./paddleRoutes');
const jacketRoutes = require('./jacketRoutes');
const path = require('path');

router.use('/canoes', canoeRoutes);
router.use('/paddles', paddleRoutes);
router.use('/jackets', jacketRoutes);

// Serve the React app for any other routes
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
});

module.exports = router;
