const { ScheduledPost, Post } = require('../models');
const cron = require('node-cron');

function timestampToCronExpression(timestamp) {
    const date = new Date(timestamp);
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const dayOfWeek = '*';

    return `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
}

exports.schedulePost = async (req, res) => {
    const { content, scheduledTime } = req.body;
    try {
        const scheduledPost = await ScheduledPost.create({
            content,
            userId: req.user.id,
            scheduledTime
        });
        // console.log(scheduledPost.dataValues);
        cron.schedule(timestampToCronExpression(new Date(scheduledTime)), async () => {
            await Post.create({
                content: scheduledPost.dataValues.content,
                userId: scheduledPost.dataValues.userId
            });
            await scheduledPost.destroy();
        });

        res.status(201).json({ scheduledPost });
    } catch (error) {
        res.status(500).json({ error: 'Error scheduling post' });
    }
};
