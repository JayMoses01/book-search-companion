import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($username: username!, $bookId: ID!) {
    _id
    username
    email
    savedBooks {
        bookId
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($username: username!, $bookId: ID!) {
    _id
    username
    email
    savedBooks {
        bookId
    }
  }
`
