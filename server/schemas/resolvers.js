const { Post, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } =require('../utils/auth');

const resolvers = {
    Query: {
        posts: async (_, { username }) => {
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
            throw new AuthenticationError('You need to login to create a post!');
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
            throw new AuthenticationError('You need to login to update a post!');
        },
        deletePost: async (_, { postId }, context) => {
            if(context.user) {
                const deletedPost = await Post.findOneAndDelete(
                    { _id: postId }
                );
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts: { postId } } },
                    { new: true, runValidators: true }
                );
                return deletedPost;
            }
            throw new AuthenticationError('You need to login to delete a post!');
        },
        attend: async (_, { postId }, context) => {
            if(context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { attending: context.user._id } },
                    { new: true, runValidators: true }
                );
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { attending: postId } },
                    { new: true, runValidators: true }
                );
                return updatedPost;
            }
            throw new AuthenticationError('You need to login to attend events!');
        }
    }
};

module.exports = resolvers; 