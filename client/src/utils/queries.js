import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      eventTitle
      createdAt
      username
      venue
      city
      band
      genre
      eventDescription
      featuredEvent
      date
      image
      attending
    }
  }
`;