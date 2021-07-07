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

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     _
//   }