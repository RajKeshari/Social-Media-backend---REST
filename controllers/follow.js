const { Follow, User } = require('../models');

exports.followUser = async (req, res) => {
    const { followingId } = req.body;
    try {
        const follow = await Follow.create({
            followerId: req.user.id,
            followingId
        });
        res.status(201).json({ follow });
    } catch (error) {
        res.status(500).json({ error: 'Error following user' });
    }
};
