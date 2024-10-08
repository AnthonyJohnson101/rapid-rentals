const router = require('express').Router();
const canoeRoutes = require('./canoeRoutes');
const paddleRoutes = require('./paddleRoutes');
const jacketRoutes = require('./jacketRoutes');

router.use('/canoes', canoeRoutes);
router.use('/paddles', paddleRoutes);
router.use('/jackets', jacketRoutes);

// Handle any undefined routes with a 404 response
router.use((req, res) => {
  res.status(404).json({ message: 'Wrong route!' });
});

module.exports = router;
