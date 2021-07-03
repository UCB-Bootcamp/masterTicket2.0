const { gql } = requireI('apollo-server-express');

const typeDefs = gql`
    type Attend {
        username: String!
        attendingVar: Boolean!
        postId: Post
    }

    type Post {
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
        attending: [Attend]
    }

    type User {
        username: String!
        email: String!
        password: String!
        posts: [Post]
        attend: []
    }

    type Query {
        posts: 
        post:
        users:
        user:
    }

    type Mutation {
        login:
        addUser:
        updateUser:
        deleteUser:
        addPost:
        updatePost:
        deletePost:
        attend:
    }
`;