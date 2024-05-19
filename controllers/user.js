const { User } = require('../models');
const { Op } = require('sequelize');

exports.findPeople = async (req, res) => {
    const { query } = req.query;
    try {
        const users = await User.findAll({
            where: {
                username: {
                    [Op.iLike]: `%${query}%`
                }
            }
        });
        res.status(201).json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Error finding users' });
    }
};
