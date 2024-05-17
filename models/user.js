module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Post, { foreignKey: 'userId' });
        User.belongsToMany(models.User, {
            through: 'Follow',
            as: 'Followers',
            foreignKey: 'followingId'
        });
        User.belongsToMany(models.User, {
            through: 'Follow',
            as: 'Following',
            foreignKey: 'followerId'
        });
    };

    return User;
};
