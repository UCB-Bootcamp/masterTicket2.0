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

export const CREATE_POST = gql`
  mutation createPost($eventTitle: String!, $username: String!, $venue: String!, $city: String!, $band: String!, $genre: String!, $eventDescription: String!, $featuredEvent: Boolean, $date: String!, $image: String!) {
    createPost(eventTitle: $eventTitle, username: $username, venue: $venue, city: $city, band: $band, genre: $genre, eventDescription: $eventDescription, featuredEvent: $featuredEvent, date: $date, image: $image) {
      eventTitle
    }
}
`;