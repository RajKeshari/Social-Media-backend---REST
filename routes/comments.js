const express = require('express');
const { createComment, editComment, deleteComment } = require('../controllers/comment');
const { authMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.post('/:postId/comments', authMiddleware, createComment);
router.put('/comments/:commentId', authMiddleware, editComment);
router.delete('/comments/:commentId', authMiddleware, deleteComment);

module.exports = router;
