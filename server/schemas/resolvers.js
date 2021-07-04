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
            return User.find();
        },
        user: async (_, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }
            const token = signToken(user);
            return { user, token };
        },
        createPost: async (_, args, context) => {
            if(context.user) {
                const post = await Post.create(args);

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return post;
            }
            throw new AuthenticationError('You need to login!');
        },
        updatePost: async (_, args, context) => {
            if(context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: args.postId },
                    { ...args },
                    { new: true, runValidators: true }
                );
                return updatedPost;
            }
            throw new AuthenticationError('You need to login!');
        },
        deletePost: async (_, { postId }) => {
            const deletedPost = await Post.findOneAndDelete(
                { _id: postId }
            );
            return deletedPost
        },
        attend: async (_, args) => {

        }
    }
};

module.exports = resolvers; 