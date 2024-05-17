const { Like, Post } = require('../models');

exports.likePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findByPk(postId);
        if (!post) return res.status(404).json({ error: 'Post not found' });

        const [like, created] = await Like.findOrCreate({
            where: { userId: req.user.id, postId }
        });
        if (!created) return res.status(400).json({ error: 'You have already liked this post' });

        res.status(201).json({ like });
    } catch (error) {
        res.status(500).json({ error: 'Error liking post' });
    }
};

exports.unlikePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const like = await Like.findOne({
            where: { userId: req.user.id, postId }
        });
        if (!like) return res.status(404).json({ error: 'Like not found' });

        await like.destroy();
        res.json({ message: 'Like removed' });
    } catch (error) {
        res.status(500).json({ error: 'Error unliking post' });
    }
};
