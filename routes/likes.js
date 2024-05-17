const express = require('express');
const { likePost, unlikePost } = require('../controllers/like');
const { authMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.post('/:postId/like', authMiddleware, likePost);
router.delete('/:postId/like', authMiddleware, unlikePost);

module.exports = router;
