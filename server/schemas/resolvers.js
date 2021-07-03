const { Post, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } =require('../utils/auth');

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
    },
    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await User.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }
            const token = signToken(user);
            return { user, token };
        }
    }
};

module.exports = resolvers; 