const User = require('./User');
const Post = require('./Post');
const Attend = require('./Attend');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Attend,
    as: 'attend_events',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Attend,
    as: 'attend_events',
    foreignKey: 'post_id'
});

Attend.belongsTo(User, {
    foreignKey: 'user_id'
});

Attend.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Attend, {
    foreignKey: 'user_id'
});

Post.hasMany(Attend, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Attend };