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
      image
    }
  }
`;

export const QUERY_FEAT_POSTS = gql`
  query {
    featuredEvent(featuredEvent: true) {
      _id
      eventTitle
      image
    }
  }
`;