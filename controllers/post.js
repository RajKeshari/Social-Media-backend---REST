const { Post, User, Like, Comment } = require('../models');

exports.getFeed = async (req, res) => {
    try {
        const following = await req.user.getFollowing();
        const followingIds = following.map(user => user.id);
        const posts = await Post.findAll({
            where: { userId: followingIds },
            include: [
                { model: User, attributes: ['username'] },
                { model: Like },
                { model: Comment, include: [User] }
            ]
        });
        res.json({ posts });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching feed' });
    }
};

exports.getPostDetails = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findByPk(postId, {
            include: [
                { model: User, attributes: ['username'] },
                { model: Like },
                { model: Comment, include: [User] }
            ]
        });
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching post details' });
    }
};

exports.createPost = async (req, res) => {
    const { content } = req.body;
    try {
        const post = await Post.create({
            content,
            userId: req.user.id
        });
        res.status(201).json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
};

exports.deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findByPk(postId);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        if (post.userId !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });

        await post.destroy();
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting post' });
    }
};

