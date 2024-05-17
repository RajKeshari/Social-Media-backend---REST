const express = require('express');
const { schedulePost } = require('../controllers/scheduledPost');
const { authMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.post('/', authMiddleware, schedulePost);

module.exports = router;
