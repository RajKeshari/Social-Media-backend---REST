const { Comment, Post } = require('../models');

exports.createComment = async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    try {
        const post = await Post.findByPk(postId);
        if (!post) return res.status(404).json({ error: 'Post not found' });

        const comment = await Comment.create({
            content,
            userId: req.user.id,
            postId
        });
        res.status(201).json({ comment });
    } catch (error) {
        res.status(500).json({ error: 'Error creating comment' });
    }
};

exports.editComment = async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;
    try {
        const comment = await Comment.findByPk(commentId);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        if (comment.userId !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });

        comment.content = content;
        await comment.save();
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ error: 'Error editing comment' });
    }
};

exports.deleteComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const comment = await Comment.findByPk(commentId);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        if (comment.userId !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });

        await comment.destroy();
        res.json({ message: 'Comment deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting comment' });
    }
};
