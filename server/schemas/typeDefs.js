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
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        posts: Post
        attend: [Post]
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
    }
    
    type Auth {
        token: ID!
        user: User
    }
`;

// more mutations
// updatePost:
// deletePost:

module.exports = typeDefs;