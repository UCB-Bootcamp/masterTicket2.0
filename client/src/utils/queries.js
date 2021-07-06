import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query {
    posts {
      _id
      date
      band
      eventTitle
      username
      city
      venue
    }
  }
`;