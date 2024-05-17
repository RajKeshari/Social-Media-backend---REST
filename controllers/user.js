const { User } = require('../models');

exports.findPeople = async (req, res) => {
    const { query } = req.query;
    try {
        const users = await User.findAll({
            where: {
                username: {
                    [Op.like]: `%${query}%`
                }
            },
            collation: 'utf8_general_ci'
        });
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Error finding users' });
    }
};
