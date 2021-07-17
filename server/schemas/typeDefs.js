const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        eventTitle: String!
        createdAt: String
        username: String
        venue: String!
        city: String!
        band: String!
        genre: String!
        eventDescription: String!
        featuredEvent: Boolean
        date: String!
        image: String
        attending: [User]
    }
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        posts: [Post]
        attending: [Post]
    }
    type Query {
        me: User
        posts: [Post]
        post(_id: ID!): Post
        featuredEvent(featuredEvent: Boolean): [Post]
        users: [User]
        user(username: String!): User
    }
    type Mutation {
        login(email: String!, password: String!) : Auth
        createUser(username: String!, email: String!, password: String!) : Auth
        createPost(username: String!, eventTitle: String!, venue: String!, city: String!, band: String!, genre: String!, eventDescription: String!, featuredEvent: Boolean, date: String!, image: String) : Post
        updatePost(postId: ID!, username: String!, eventTitle: String!, venue: String!, city: String!, band: String!, genre: String!, eventDescription: String!, featuredEvent: Boolean, date: String!, image: String!) : Post
        updateUser(username: String!, email: String!, password: String!) : User
        deletePost(postId: ID!) : Post
        deleteUser(username: String!) : User
        attend(postId: ID!) : Post
    }
    
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;