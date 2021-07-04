const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        eventTitle: String!
        createdAt: String
        username: String!
        venue: String!
        city: String!
        band: String!
        genre: String!
        eventDescription: String!
        featuredEvent: Boolean
        date: String!
        image: String!
        attending: [User]
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        posts: Post
        attending: [Post]
    }

    type Query {
        posts: [Post]
        post(_id: ID!): Post
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!) : Auth
        createUser(username: String!, email: String!, password: String!) : Auth
        createPost(username: String!, eventTitle: String!, venue: String!, city: String!, band: String!, genre: String!, eventDescription: String!, featuredEvent: Boolean, date: String!, image: String!) : Post
        updatePost(postId: ID!, username: String!, eventTitle: String!, venue: String!, city: String!, band: String!, genre: String!, eventDescription: String!, featuredEvent: Boolean, date: String!, image: String!) : Post
        deletePost(postId: ID!) : Post
        attend(postId: ID!) : Attend
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Attend {
        user: User
        post: Post
    }
`;

module.exports = typeDefs;