module.exports = (sequelize, DataTypes) => {
    const ScheduledPost = sequelize.define('ScheduledPost', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        scheduledTime: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    ScheduledPost.associate = function (models) {
        ScheduledPost.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return ScheduledPost;
};
