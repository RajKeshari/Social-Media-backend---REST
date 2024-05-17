const express = require('express');
const { getFeed, getPostDetails, createPost, deletePost } = require('../controllers/post');
const { authMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.get('/feed', authMiddleware, getFeed);
router.get('/:postId', authMiddleware, getPostDetails);
router.post('/', authMiddleware, createPost);
router.delete('/:postId', authMiddleware, deletePost);

module.exports = router;
