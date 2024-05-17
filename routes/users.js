const express = require('express');
const { findPeople } = require('../controllers/user');
const { followUser } = require('../controllers/follow');
const { authMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.get('/find', authMiddleware, findPeople);
router.post('/follow', authMiddleware, followUser);

module.exports = router;
