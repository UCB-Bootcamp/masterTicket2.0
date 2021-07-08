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

export const QUERY_SINGLE_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      date
      eventDescription
      band
      eventTitle
      city
      venue
      attending {
        _id
      }
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