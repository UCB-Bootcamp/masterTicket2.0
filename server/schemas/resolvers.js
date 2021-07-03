const { Post } = require('../models');

const resolvers = {
    Query: {
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params);
        },
        post: async (_, { _id }) => {
            return Post.findOne( { _id });
        },
        users: async () => {
            return User.find()
                .select('-__v -password');
        },
        user: async (_, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        }
    }
};

module.exports = resolvers;