import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ATTEND_EVENT = gql`
  mutation attend($postId: ID!) {
    attend(postId: $postId) {
      attending {
        _id
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($eventTitle: String!, $username: String!, $venue: String!, $city: String!, $band: String!, $genre: String!, $eventDescription: String!, $featuredEvent: Boolean, $date: String!, $image: String) {
    createPost(eventTitle: $eventTitle, username: $username, venue: $venue, city: $city, band: $band, genre: $genre, eventDescription: $eventDescription, featuredEvent: $featuredEvent, date: $date, image: $image) {
      eventTitle
    }
  }
`;

export const TEST_CREATE_POST = gql`
  mutation createPost {
    createPost(eventTitle: "Weezer", username: "squidbeaks", venue: "Santa Barbara Bowl", city: "Santa Barbara", band: "Weezer", genre: "Alternative Rock", eventDescription: "Blah blah blah", featuredEvent: true, date: "Sep 21, 2021") {
      eventTitle
      image
    }
  }
`;
