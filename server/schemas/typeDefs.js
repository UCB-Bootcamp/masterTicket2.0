const { gql } = requireI('apollo-server-express');

const typeDefs = gql`
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
        attending: [Post]
    }

    type User {

    }

    type Query {

    }

    type Mutation {

    }
`;